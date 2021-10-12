import React from 'react';

function Post({match}) {
    console.log(match)
    return (
        <div>
            rendering post{match.params.id}
        </div>
    );
}

export default Post;