import React, {Component} from 'react';

class CounterProd extends Component{
    state = {
        order: 0
    }
    
    handleOnChangeCounter = (newValue) => {
        this.props.onChangeCounter(newValue)
    }

    handleMinus = () => {
        if(this.state.order >0){
            this.setState({
                order: this.state.order -1
            }, () => {
                this.handleOnChangeCounter(this.state.order)
            })
        }
    }

    handlePlus = () => {
            this.setState({
                order: this.state.order + 1
            }, () => {
                this.handleOnChangeCounter(this.state.order)
            })
    }

    render(){
        return (
            <div className="counter">
                <button className="minus" onClick={this.handleMinus} >-</button>
                <input className="text-count" type="text" value={this.state.order}/>
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default CounterProd;