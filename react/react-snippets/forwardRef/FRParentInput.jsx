import React from 'react';
import FRInput from './FRInput';

//添加ref和点击事件
const FRParentInput = () => {
    const inputRef = useRef();
    const handleClick = () =>{
        inputRef.current.focus();
    } 
    return (
        <div>
            <FRInput ref={inputRef}/>
            <button onClick ={handleClick}>Focus Input</button>
        </div>
    )
}

export default FRParentInput;

//静态效果
const FRParentInput = () => {
    return (
        <div>
            <FRInput />
            <button >Focus Input</button>
        </div>
    )
}

export default FRParentInput;