const Chat = () => {
    const messageWrapperRef = useRef<any>();

    //此方法加到useEffect里面，依赖页面里面渲染的messages函数
    useEffect(() => {
        // scroll to bottom
        if (messageWrapperRef) {
            const scrollHeight = messageWrapperRef.current.scrollHeight;//里面div的实际高度  2000px
            const height = messageWrapperRef.current.clientHeight;  //网页可见高度  200px
            const maxScrollTop = scrollHeight - height;
            messageWrapperRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
            //如果实际高度大于可见高度，说明是有滚动条的，则直接把网页被卷去的高度设置为两个div的高度差，实际效果就是滚动到底部了。
        }
    }, [messages])

    return(
        <div className= { styles.messageWrapper } ref = { messageWrapperRef } ></div>
    )
}
