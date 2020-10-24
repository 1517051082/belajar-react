import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
    return (
        <div className="padding-10">
            <div className="youtube-wrapper">
                <div className="img-thumb">
                    <img src="https://fakeimg.pl/250x118" alt="Thumbnail"/>
                    <p className="time">{props.time}</p>
                </div>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    title: "default title",
    desc: "default descripption",
    time: "00.00"
}

export default YoutubeComponent;