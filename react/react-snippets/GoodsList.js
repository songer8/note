import config from './config';

function GoodsList() {
    const [pageSize, setPageSize] = useState(10);
    const [pageNum, setPageNum] = useState(1);
    const [goods, setGoods] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchGoodsList();
    }, [pageNum]);

    const fetchGoodsList = () => {
        setIsLoading(true);
        let url = `${config.API_URL}?pageSize=${pageSize}&pageNum=${pageNum}`;
        fetch(url).then(res => res.json()).then(result => {
            if (!result.hasMore) setHasMore(false);
            setGoods(goods.concat(result.goods));
            setIsLoading(false);
        })
    }

    return (
        <div>
            <ul>
                {
                    goods.map((good, index) => {
                        return <li key={index}>{good}</li>
                    })
                }
            </ul>
            {/* {hasMore && <button onClick={() => {setPageNum(pageNum + 1)}}>下一页</button>} */}
            <LoadMore fetchNext={() => {setPageNum(pageNum + 1)}} hasMore={hasMore} isLoading={isLoading}/>
        </div>
    )
}