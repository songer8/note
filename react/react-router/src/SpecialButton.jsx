import React from 'react';
import { withRouter } from 'react-router-dom';

const SpecialButton = withRouter(({history}) => {
    return (
        <button onClick={() => {history.push('/posts/special') }}>
            Special button
        </button>
    );
})

export default SpecialButton;
