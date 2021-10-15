import React, { useState } from 'react';

const MyComponent = () => {
    const [isShown, setIsShown] = useState(true);

    return (
        <div className="home">
            <button onClick={() => setIsShown(!isShown)}></button>
            {isShown && <div>此处有文本</div>}
        </div>
    );
}

export default MyComponent;