import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null); //原本为const [blogs, setBlogs] = useState(null)，这边为了复用，使用data这样更为广义的变量名
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)//不是具体的url，而是作为参数传进来
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data); //同步修改为setData
                    setError(null);
                })
                .catch(err => {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url])//每当url有变化时，触发useEffect

    return { data, isPending, error }; //需要将外部组件需要的数据return出去
}

export default useFetch;