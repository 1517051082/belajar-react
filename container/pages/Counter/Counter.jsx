import React, { Component, Fragment } from "react";
import "./Counter.css";
import CardProduct from "../CardProduct/CardProduct";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="https://etanee.id/img/content/img_logo_etanee_white.svg"
              alt=""
            />
          </div>
          <div className="troley">
            <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
            <div className="count">{this.props.order}</div>
          </div>
        </div>
        <CardProduct />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  };
};

export default connect(mapStateToProps)(Counter);
