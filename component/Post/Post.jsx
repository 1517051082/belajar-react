import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/nature" alt="Thmb"/>
            </div>
            <div className="content">
                <div className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</div>
                <div className="desc">{props.data.body}</div>
                <button className="btn-remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                <button className="btn-update" onClick={() => props.update(props.data)}>Update</button>
            </div>
        </div>
    )
}

export default Post;