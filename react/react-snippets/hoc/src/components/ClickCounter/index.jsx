import React from 'react';
import WithCounter from '../WithCounter/index';

const ClickCounter = props => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button name={props.name} onClick={incrementCount}>点击{count}次</button>
        </div>
    )
}

export default WithCounter(ClickCounter,5)