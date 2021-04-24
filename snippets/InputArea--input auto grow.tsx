import React, { useState, useRef } from 'react';
import styles from './index.module.scss';

const InputArea = () => {
    const maxRows = useRef(5);
    const minRows = useRef(1);
    const [rows, setRows] = useState(1);
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
        const textareaLineHeight = 24;
        const previousRows = event.target.rows;
        event.target.rows = minRows.current; // reset number of rows in textarea 
        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
        if (currentRows >= maxRows.current) {
            event.target.rows = maxRows.current;
            event.target.scrollTop = event.target.scrollHeight;
        }
        setRows(currentRows < maxRows.current ? currentRows : maxRows.current);
        setValue(event.target.value)
    };
    return (
        <div className={styles.inputArea}>
            <textarea
                className={styles.input}
                placeholder="输入聊天内容"
                rows={rows}
                value={value}
                onChange={handleChange}
            />
            <div className={styles.btnWrapper}>
                <button className={styles.submit}>发送</button>
            </div>
        </div>
    )
}

export default InputArea;

//以下css
@import '../../../styles/mixins.scss';

.inputArea {
    display: flex;
    position: absolute;
    bottom: 0;
    padding: px2rem(20px) px2rem(10px);
    .input {
        flex: 1;
        min - height: px2rem(30px);
        margin - right: px2rem(5px);
        padding: 3px px2rem(10px);
        background - color: #464c6a;
        border: none;
        color: #ffffff;
        line - height: 24px;
        resize: none;
        &:: placeholder {
            font - size: 12px;
            color: #878991;
        }
    }

    .btnWrapper{
        display: flex;
        align - items: flex - end;
        .submit {
            height: px2rem(30px);
            width: px2rem(60px);
            background - color: #0075ff;
            border - radius: 3px;
            color: #ffffff;
        }
    }

}
