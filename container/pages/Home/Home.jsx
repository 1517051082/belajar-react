import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from '../../../src/App';
import Product from '../Product/Product';

class Home extends Component{
  render(){
    return (
      <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
      </div>

      <Route path="/" exact component={App}/>
      <Route path="/product" component={Product}/>
      </Router>
    )
  }
}

export default Home;