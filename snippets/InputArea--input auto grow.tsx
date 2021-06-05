import React, { useState, useRef } from 'react';
import styles from './index.module.scss';

const InputArea = (props) => {

    let { sendMsg } = props;

    const maxRows = useRef(5);
    const minRows = useRef(1);
    const [rows, setRows] = useState(1);
    const textareaRef = useRef<any>();

    //判断textArea的行数；
    const handleChange = (event: any) => {
        const textareaLineHeight = 24;
        const previousRows = event.target.rows;
        event.target.rows = minRows.current; // reset number of rows in textarea
        const currentRows = Math.floor(
            event.target.scrollHeight / textareaLineHeight
        );

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
        if (currentRows >= maxRows.current) {
            event.target.rows = maxRows.current;
            event.target.scrollTop = event.target.scrollHeight;
        }
        setRows(currentRows < maxRows.current ? currentRows : maxRows.current);
    };

    //发消息
    const sendMessage = () => {
        sendMsg(textareaRef.current.value);
        setNativeValue(textareaRef.current, '');//触发原生解决onChange不生效的问题；
        textareaRef.current.dispatchEvent(new Event('input', { bubbles: true }));//手动派发事件
    }

    // 解决textarea无法触发onChange事件问题；
    const setNativeValue = (element: any, value: any) => {
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter?.call(element, value);
        } else {
            valueSetter?.call(element, value);
        }
    }

    //enter 发送
    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13 && textareaRef.current.value.length !== 0) {
            sendMessage();
            e.preventDefault();
        }
    }

    return (
        <div className={styles.inputArea}>
            <textarea
                className={styles.input}
                placeholder="输入聊天内容"
                rows={rows}
                ref={textareaRef}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button
                className={styles.submit}
                onClick={sendMessage}
            >
                发送
            </button>
        </div>
    );
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
