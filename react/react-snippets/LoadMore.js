
function LoadMore({ fetchNext, hasMore, isLoading }) {
    const [isTouchEnd, setIsTouchEnd] = useState(false);
    const loadMoreEl = useRef();

    useEffect(() => {
        if(isTouchEnd) {
            fetchNext();
        }
    }, [isTouchEnd]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scoll', handleScroll);
        }
    }, []);

    const handleScroll = throttle((event) => {
        let threshold = 100;
        if(event.scrollTop > loadMoreEl.current.scrollHeight - loadMoreEl.current.offsetHeight - threshold) {
            setIsTouchEnd(true);
        }
    });

    return (
        <div ref={loadMoreEl}>
            { isLoading && <img src="./loading.gif" />}
            { !hasMore && <p>没有更多了</p>}
        </div>
    )
}