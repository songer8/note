import Message from './Message/index';
import InputArea from './InputArea/index';
import styles from './index.module.scss';
import TIM from 'tim-js-sdk';
import moment from 'moment';
import genTestUserSig from 'libs/GenerateTestUserSig';
import { useEffect, useRef, useState } from 'react';

const groupName = '面试01群';
const userID = '12345'
const messages = [
    {
        userId: '1',
        username: 'tony',
        avatar: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
        texts: ['你好', '我叫托尼'],
        time: '2021-03-21 10:00'
    },
    {
        userId: '2',
        username: 'lisa',
        avatar: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
        texts: ['哈哈哈哈哈哈safasfasfsf哈'],
        time: '2021-03-21 11:11'
    }
]

const Chat = () => {
    const [groupID, setGroupID] = useState<any>('');
    const [messages, setMessages] = useState<any[]>([]);
    const timRef = useRef<any>();

    useEffect(() => {
        try {
            let options = {
                SDKAppID: 1400506275 // 接入时需要将0替换为您的云通信应用的 SDKAppID
            };
            timRef.current = TIM.create(options);
            timRef.current.setLogLevel(4);
            timRef.current.on(TIM.EVENT.SDK_READY, function (event: any) {
                updateProfile();
                createGroup();
            })
            login().then(res => console.log(res));
        } catch (e) {
            console.log(e);
        }
    }, [])

    const login = async () => {
        const config = genTestUserSig(userID); //生成用户签名
        const userSig = config.userSig;
        return timRef.current.login({
            userID,
            userSig
        });
    }

    const createGroup = () => {
        const localGroupID = localStorage.getItem('groupID');
        if (localGroupID) {
            setGroupID(localGroupID);
        } else {
            const newGroup = timRef.current.createGroup({
                type: TIM.TYPES.GRP_MEETING,
                name: groupName,
                memberList: [{ userID }]
            });
            newGroup.then((imResponse: any) => {
                setGroupID(imResponse.data.group.groupID);
                localStorage.setItem('groupID', imResponse.data.group.groupID);
            })

        }
    }

    const addGroup = () => {
        const joinGroup = timRef.current.joinGroup({ groupID: 'groupID', type: TIM.TYPES.GRP_GRP_MEETING });
    }

    const getMsgList = () => {
        timRef.current.getMessageList({ conversationID: 'GROUP${groupID}', count: 15 });
    }

    const updateProfile = () => {
        // 修改个人标配资料
        let promise = timRef.current.updateMyProfile({
            nick: 'Tony',
            avatar: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
            gender: TIM.TYPES.GENDER_MALE,
            selfSignature: 'hahaha',
            allowType: TIM.TYPES.ALLOW_TYPE_ALLOW_ANY
        });
        promise.then(function (imResponse: any) {
            console.log(imResponse.data); // 更新资料成功
        }).catch(function (imError: any) {
            console.warn('updateMyProfile error:', imError); // 更新资料失败的相关信息
        });
    }

    const sendMsg = (text: string) => {
        // 1. 创建消息实例，接口返回的实例可以上屏
        let message = timRef.current.createTextMessage({
            to: groupID,
            conversationType: TIM.TYPES.CONV_GROUP,
            payload: { text },
        });
        // 2. 发送消息
        let sendMessagePromise = timRef.current.sendMessage(message);
        setMessages(pre => [...pre, message]);
        sendMessagePromise.then(function (imResponse: any) {
            // 发送成功
            console.log(imResponse);
        }).catch(function (imError: any) {
            // 发送失败
            console.warn('sendMessage error:', imError);
        });
        console.log(messages);
    }

    // interface IMsgs{
    //     msgs: IMsgDetail[];
    // }

    // interface IMsgDetail{
    //     userID: string;
    //     nick: string;
    //     avatar: string;
    //     texts: [];
    //     time: number;
    //     key: number;
    // }
    const convert = (messages: any) => {
        let msgs: any = [];
        messages.forEach((message: any, index: number) => {
            let convertedMsg = {
                userID: message.from,
                nick: message.nick,
                avatar: message.avatar,
                texts: [message.payload.text],
                time: message.time,
                key: index
            }
            if (msgs.length === 0) {
                msgs.push(convertedMsg);
            } else if (message.from === msgs[msgs.length - 1].userID && message.time - msgs[msgs.length - 1].time < 60) {
                msgs[msgs.length - 1].texts.push([message.payload.text])
            } else {
                msgs.push(convertedMsg);
            }
        })
        return msgs;
    }

    return (
        <div className={styles.messageWrapper}>
            {
                convert(messages).map((message: any, index: number) => {
                    return <Message
                        currUserId="1"
                        userId={message.from}
                        nick={message.nick}
                        avatar={message.avatar}
                        texts={message.texts}
                        time={moment(message.time*1000).format('YYYY-MM-DD HH:mm')}
                        key={index}
                    />
                })
            }
            <InputArea sendMsg={sendMsg} />
        </div>
    )
}

export default Chat;