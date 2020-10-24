import React, {Component} from 'react';
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';
import API from '../../../services/index.js';

class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost: {
            id: 1,
            userId: 1,
            title: '' ,
            body: '',
        },
        isUpdate: false,
        comments: []
    }

    componentDidMount(){
        this.getPostApi()
    }

    handleRemove = (data) => {
        API.deletePost(data).then(result => {
            this.getPostApi()
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    userId: 1,
                    title: '' ,
                    body: '',
                },
            })
        })
        // axios.delete(`http://localhost:3034/posts/${data}`)
        // .then((res)=>{
        //     this.getPostApi()
        // })
    }

    getPostApi = () => {
        API.getNewBlog().then(result => {
            this.setState({
                post: result
            })  
        })

        // API.getComment().then(result => {
        //     this.setState({
        //         comments: result
        //     })  
        // })
    }

    handleInput = (e) => {
        let newValue = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();

        if(!this.state.isUpdate){
            newValue['id'] = timestamp;
        }

        newValue[e.target.name] = e.target.value;
        this.setState({
            formBlogPost: newValue
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.handlePostUpdate()            
        } else{
            this.handlePost()
        }
    }

    handlePost = () => {
        API.postNewBlog(this.state.formBlogPost).then(result => {
            this.getPostApi()
        })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    } 

    handlePostUpdate = () => {
        API.updatePost(this.state.formBlogPost,this.state.formBlogPost.id).then(result => {
                this.getPostApi()
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        userId: 1,
                        title: '' ,
                        body: '',
                    },
                })
        })
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail/${id}`)
    }

    render(){
        return (
            <div>
                <h1>Halaman Blog Post</h1>
                <hr/>
                <div className="post">
                    <div className="form-add">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="Add Title" onChange={this.handleInput}/>
                        <br/>
                        <br/>
                        <label htmlFor="body">Body</label>
                        <textarea name="body" value={this.state.formBlogPost.body} placeholder="Add Body" rows="5" cols="20" onChange={this.handleInput}></textarea>
                        <br/>
                        <br/>
                        <button onClick={this.handleSubmit}>Simpan</button>
                    </div>
                    <p className="postTitle">Post Blog</p>
                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default BlogPost;