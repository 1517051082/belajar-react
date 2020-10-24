import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../../redux/reducer/GlobalActionType";

class CounterProd extends Component {
  render() {
    return (
      <div className="counter">
        <button className="minus" onClick={this.props.handleMinus}>
          -
        </button>
        <input className="text-count" type="text" value={this.props.order} />
        <button className="plus" onClick={this.props.handlePlus}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToPros = (state) => {
  return {
    order: state.totalOrder
  };
};

const mapDispatchToOrder = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ActionType.ADD_ORDER }),
    handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER })
  };
};

export default connect(mapStateToPros, mapDispatchToOrder)(CounterProd);
