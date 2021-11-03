import React from 'react';
import styles from './index.module.scss';

const Topbar = ({ title }) => {
    return (
        <div className={styles.topbarWrapper}>
            <span className='iconfont icon-fanhui'></span>
            <span className={styles.title}>{title}</span>
            <span className={styles.placeholder}></span>
        </div>
    )
}

export default Topbar;