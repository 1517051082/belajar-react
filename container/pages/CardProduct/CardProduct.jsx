import React , {Component, Fragment} from 'react';
import CounterProd from './CounterProd';

class CardProduct extends Component{
 state = {
     order: 0
 }

    render(){
        return (
            <Fragment>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://th.bing.com/th/id/OIP.E52RkLmT0OgeQ3bPwjXUfwHaHa?pid=Api&rs=1" alt=""/>
                    </div>
                    <p className="product-title">Kecap</p>
                    <p className="product-price">Rp. 40000</p>
                    <CounterProd onChangeCounter={(value) => this.props.onChangeCounter(value)}/>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct;