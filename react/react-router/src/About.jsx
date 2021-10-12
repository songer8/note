import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    let postId = 5
    return (
        <div>
            <div>about</div>
            <Link to={`/posts/${postId}`}>go to post1</Link>
        </div>
    );
}

export default About;