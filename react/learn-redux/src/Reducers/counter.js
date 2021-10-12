const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload //取action里面的payload入参
        case 'DECREMENT':
            return state - 1
        default : 
            return state;
    }
}

export default counterReducer;