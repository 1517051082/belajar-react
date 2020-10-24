import axios from 'axios';

const RootPath = 'http://localhost:3034';
const OnlineRoot = 'http://jsonplaceholder.typicode.com';

const Get = (path,root) => {
    const promise = new Promise((resolve,reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}`)
        .then(res => {
            resolve(res.data)
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const Post = (path,data, root) => {
    const promise = new Promise((resolve,reject) => {
        axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data)
        .then(res => {
            resolve(res.data)
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const Put = (path,data, id, root) => {
    const promise = new Promise((resolve,reject) => {
        axios.put(`${root ? OnlineRoot : RootPath}/${path}/${id}`, data)
        .then(res => {
            resolve(res.data)
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const Remove = (path,id, root) => {
    const promise = new Promise((resolve,reject) => {
        axios.delete(`${root ? OnlineRoot : RootPath}/${path}/${id}`)
        .then(res => {
            resolve(res.data)
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const getNewBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComment = () => Get('comments', true);
const postNewBlog = (data) => Post('posts', data, false);
const updatePost = (data,id) => Put('posts',data,id,false);
const deletePost = (id) => Remove('posts',id,false);

const API = {
    getNewBlog,
    getComment,
    postNewBlog,
    updatePost,
    deletePost
}


export default API;