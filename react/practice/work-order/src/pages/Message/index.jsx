import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Topbar from '../../components/Topbar';
import styles from './index.module.scss';

const Message = () => {
    let history = useHistory()
    const [questionerInfo, setQuestionerInfo] = useState({});

    useEffect(() => {
        fetch('/api/questionerInfo').then((res) => {
            return res.json();
        }).then((result) => {
            setQuestionerInfo(result.data);
        })
    }, [])
    
    const transferWorkOrder = () => {
        history.push("/transforTicket")
    }

    return (
        <div className={styles.message}>
            <Topbar title='工单留言' />
            <div className={styles.questioner}>
                <img
                    className={styles.avatar}
                    src={questionerInfo.avatar}
                    alt="用户头像"
                />
                <div className={styles.questionerInfo}>
                    <div className={styles.userName}>{questionerInfo.userName}</div>
                    <div className={styles.otherInfo}>{questionerInfo.company}</div>
                    <div className={styles.otherInfo}>{questionerInfo.department +'｜'+ questionerInfo.team + '｜' + questionerInfo.title}</div>
                </div>
                <div className={styles.label}>提问人</div>
            </div>
            <div className={styles.workOrderInfo}>
                <div className={styles.title}>工单信息</div>
                <div className={styles.workOrderWrapper}>
                    <div className={styles.workOrderInfoTitle}>问题类型</div>
                    <div className={styles.workOrderDetail}>奖惩制度/社保/社保公积金</div>
                </div>
                <div className={styles.workOrderWrapper}>
                    <div className={styles.workOrderInfoTitle}>问题描述</div>
                    <div className={styles.workOrderDetail}>这里就是一段描述，随便谢谢什么就好了,这里就是一段描述，随便谢谢什么就好了,这里就是一段描述，随便谢谢什么就好了</div>
                </div>
                <div className={styles.workOrderWrapper}>
                    <div className={styles.workOrderInfoTitle}>联系方式</div>
                    <div className={styles.workOrderDetail}>13737373737</div>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={`${styles.transfer} ${styles.btn}`} onClick={transferWorkOrder}>转接工单</button>
                <button className={`${styles.answer} ${styles.btn}`}>解答</button>
            </div>
        </div>
    )
}

export default Message;