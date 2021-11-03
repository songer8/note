import React from 'react';
import styles from './index.module.scss';

const AnswererCard = ({ answererInfo, setIsRadioChecked}) => {

    return (
        <div className={styles.answererCardWrapper}>
            <img
                className={styles.avatar}
                src={answererInfo.avatar}
                alt="用户头像"
            />
            <div className={styles.answererInfo}>
                <div className={styles.userName}>{answererInfo.userName}</div>
                <div className={styles.otherInfo}>{answererInfo.company}</div>
                <div className={styles.otherInfo}>{answererInfo.department + '｜' + answererInfo.team + '｜' + answererInfo.title}</div>
            </div>
            <div
                className={`iconfont ${answererInfo.isChecked ? 'icon-xuanzekuangxuanzhong' : 'icon-xuanzekuangmoren'}`}
                onClick={setIsRadioChecked}
            >
            </div>
        </div>
    )
}

export default AnswererCard;