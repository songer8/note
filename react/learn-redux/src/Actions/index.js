export const increment = (nr) => {
    return{
        type:'INCREMENT',
        payload:nr //定义入参（加值步长5）
    }
}

export const decrement = () => {
    return{
        type:'DECREMENT'
    }
}