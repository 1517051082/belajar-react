import React , {Component} from 'react';
import './LifeCycle.css';

class LifeCycle extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 5
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("derived")
        return null;
    }

    componentDidMount(){
        console.log("didmount");
        this.setState({
            count: 9
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("should");
        if(nextState.count > 11){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("snapsht")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("update")
    }

    componentWillUnmount(){
        console.log("unmount")
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log("render")
        return (
            <div>
                <h1>Halaman Lifecycle</h1>
                <hr/>
                <button className="btn" onClick={this.handleClick}>Button {this.state.count}</button>
            </div>
        )
    }
}

export default LifeCycle;