import React, { useState } from 'react';
const HoverCounter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(prevoiusCount => prevoiusCount + 1)
    }
    return (
        <div>
            <h2 onMouseOver={incrementCount}>悬停{count}次</h2>
        </div>
    )
}

export default HoverCounter