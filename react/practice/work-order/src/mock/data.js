import fetchMock from 'fetch-mock'

//提问人信息
fetchMock.mock('/api/questionerInfo', {
    code: '2000',
    success: true,
    data: {
        userName: '张宝',
        avatar: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
        company: '皮卡丘有限公司',
        department: '产品部', 
        team: '设计',
        title: 'UED',
    },
    message: '商品信息查询成功'
});

//解答人信息
fetchMock.mock('/api/answerer', {
    code: 2000,
    success: true,
    data: [
        {
            id: "1",
            userName: '胡大宝',
            avatar: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
            company: '皮卡丘有限公司',
            department: '产品部',
            team: '设计',
            title: 'UED',
        },
        {
            id: "2",
            userName: '胡老宝',
            avatar: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
            company: '皮卡丘有限公司',
            department: '技术部',
            team: '开发',
            title: '前端',
        },
        {
            id: "3",
            userName: '胡中宝',
            avatar: 'https://jkcdn.pajk.com.cn/image/T1jUYhBCCT1RCvBVdK?img=/rs,w_180,h_180/tf,q_70',
            company: '皮卡丘有限公司',
            department: '商城',
            team: '运营部',
            title: '运营',
        }
    ],
    message: '商品信息返回成功'
})

fetchMock.mock('/api/question', {
    code: '2000',
    success: true,
    data: {
        level1: '奖惩制度',
        level2: '社保',
        level3: '公积金',
    },
    message: '商品信息查询成功'
});