import React, { useRef, useImperativeHandle } from 'react';

//useImperativeHandle
const FRInput = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({//第一个参数：暴露哪个ref；第二个参数：暴露什么
        focus: () => inputRef.current.focus()
    }));
    return (
        <div>
            {/* 此处{}中的ref指向父组件FRParentInput的ref，类似于props传值的用法 */}
            <input type="text" ref={inputRef} />
        </div>
    )
})

export default FRInput;

//React.forwardRef
const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            {/* 此处{}中的ref指向父组件FRParentInput的ref，类似于props传值的用法 */}
            <input type="text" ref={ref} /> 
        </div>
    )
})

export default FRInput;

//静态效果
const FRInput = () => {
    return(
        <div>
            <input type="text"/>
        </div>
    )    
}