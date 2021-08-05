import React, { useState } from 'react';

const WithCounter = (OriginalComponent, step) => {
    const NewComponent = props => {
        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount(prevoiusCount => prevoiusCount + step)
        }
        return (
            <OriginalComponent
                count={count}
                incrementCount={incrementCount}
                {...props}
            />
        )
    }
    return NewComponent
}

export default WithCounter;

