import React, {Component, Fragment} from 'react';
import LifeCycle from '../pages/LifeCycle/LifeCycle';
// import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';
import Counter from '../pages/Counter/Counter';
import BlogPost from '../pages/BlogPost/BlogPost';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import YoutubeComponentPage from '../pages/YoutubeComponent/YoutubeComponent';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

class HomeComponent extends Component{

    render(){
        return (
            <Router>
                {/* <div>
                    <p>Youtube Component</p>
                    <hr/>
                    <YoutubeComponent title="Youtube bagian 1" time="10.01" desc="Youtube video pertama"/>
                    <YoutubeComponent title="Youtube bagian 2" time="20.02" desc="Youtube video keuda"/>
                    <YoutubeComponent title="Youtube bagian 3" time="30.02" desc="Youtube video ketiga"/>
                    <YoutubeComponent title="Youtube bagian 4" time="30.05" desc="Youtube video keempat"/>
                    <YoutubeComponent />
                    <p>Products</p>
                    <hr/>
                    <Counter/>
                
                    <LifeCycle  />
                    <p>Blog Post</p>
                    <hr/>
                    <BlogPost />
                </div> */}
                <Fragment>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/youtube">Youtube</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail/:id" component={DetailPost}/>
                    <Route path="/youtube" component={YoutubeComponentPage} />
                    <Route path="/product" component={Counter} />
                    <Route path="/lifecycle" component={LifeCycle} />
                </Fragment>
            </Router>
        )
    }
}

export default HomeComponent;