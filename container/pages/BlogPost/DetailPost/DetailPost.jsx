import React , {Component} from 'react';
import axios from 'axios';

class DetailPost extends Component{
    state = {
        title: '',
        body: ''
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3034/posts/${id}`)
        .then(res => {
            let post = res.data;
            console.log("res: ", post);
            this.setState({
                title: post.title,
                body: post.body
            })
        })
    }

    render(){
        return (
            <div>
                <p>Detail Post</p>
        <       p>{this.state.title}</p>
        <       p>{this.state.body}</p>
            </div>
        )
    }
}

export default DetailPost;