import React from 'react';
import {Link} from 'react-router-dom';
import SpecialButton from './SpecialButton'

function Home({history, location, match}) {
    console.log(match)
    return (
        <div>
            <div>home</div>
            <Link to = '/about' >go to about</Link>
            <button onClick={() => history.push('./about')}>点击我跳转about</button>
            {/* history作为props传入 */}
            <SpecialButton /> 
        </div>
    );
}

export default Home;