### 明细说明
https://juejin.cn/post/6844903715921477640

### ps
如果是父组件多次调用，导致重复调用setState，则需要用队列控制setState；队列的核心是一个状态值和一个数组；

```js
const isFetchingRef = useRef(false);  //状态值
const waitingQueueRef = useRef<any[]>([]); //数组
const getMessageList = (nextReqMessageID?: any) => {
        // 排队，防止同时setState造成历史消息列表去重失败，消息重复上屏
        if(isFetchingRef.current) {
            let len = waitingQueueRef.current.length;
            if (len === 0 || waitingQueueRef.current[len-1] !== nextReqMessageID) {
                waitingQueueRef.current.push(nextReqMessageID);
            }
            return;
        }
        isFetchingRef.current = true;
        return im
            .getMessageList(nextReqMessageID)
            .then(({ messageList, nextReqMessageID, isCompleted }) => {
                // 去重后加入列表
                let deDuplicatedList = messageList.filter((message: any) => {
                    let isContained = false;
                    messages.forEach(element => {
                        if (element.ID === message.ID) {
                            isContained = true;
                            return;
                        }
                    });
                    if (isContained) {
                        return false;
                    } else {
                        return true;
                    }
                })
                setMessages(prev => [...deDuplicatedList, ...prev]);
                nextReqMeesageIDRef.current = nextReqMessageID;
                setIsCompleted(isCompleted);
                isFetchingRef.current = false;
                
                let nextId = waitingQueueRef.current.pop();
                nextId && getMessageList();
            });
    };
```