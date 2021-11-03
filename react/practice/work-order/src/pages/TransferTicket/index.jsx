import React, { useEffect, useState } from 'react';
import AnswererCard from '../../components/AnswererCard';
import Topbar from '../../components/Topbar';
// import { Cascader } from 'rsuite';
import data from '../../data/@data.json';
// import 'rsuite/dist/rsuite.min.css';
import Cascader from 'rc-cascader';
import 'rc-cascader/assets/index.less';

const TransferTicket = () => {
    console.log(data)

    const [answererInfo, setAnswererInfo] = useState([]);

    useEffect(() => {
        fetch('/api/answerer').then(res => {
            return res.json()
        }).then(result => {
            console.log(result.data)
            setAnswererInfo(result.data)
        })
    }, [])

    // useEffect(() => )

    const setRadioChecked = (index) => {
        let newAnswererInfos = answererInfo.map((item, idx) => {
            if (idx === index) {
                item.isChecked = true;
            } else {
                item.isChecked = false;
            }
            return item;
        })
        setAnswererInfo(newAnswererInfos);
    }

    return (
        <div>
            <Topbar title='转接工单' />
            <div>
                <div>
                    <span>重新指定问题类型</span>
                    <span>*</span>
                </div>
                <Cascader
                    options={data}
                    defaultValue={['奖惩制度', '社保', '社保公积金']}
                >
                </Cascader>
            </div>
            <div>
                <div>对应解答人</div>
                {answererInfo && answererInfo.map((item, index) => {
                    return (
                        <AnswererCard
                            key={index}
                            answererInfo={item}
                            setIsRadioChecked={() => setRadioChecked(index)}
                        />
                    )
                })}
            </div>
            <button>提交</button>
        </div>
    )
}

export default TransferTicket;