import {useState, useEffect} from 'react';

function Posts(props){
    
    const [loadedPosts, setPosts] = useState([]);


    return (
        <div className="posts">
            loadedPosts.map(post, index) => <Post key={post.item.has} post={post} />
            <div className="post box">
                <div className="post-output">
                    Sample Text
                </div>
            </div>
        </div>
    )
}

export default Posts;