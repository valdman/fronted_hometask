import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {buyGood} from "../../controller"

import './Product.css'
import { addToCart } from '../../actions';

const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})

class Product extends PureComponent {
    buyItem = (id) => () => {
        buyGood(id)
        .then(this.props.addToCart(id))
        this.props.onBuySomething();
    }

    render() {
        const { id, desc, name, pic, price} = this.props;

        return (
            <div className="Product">
                <h3 className="itemTitle">{name}</h3>
                <img src={pic} width="150" height="161" alt={id}/>
                <p>Цена: <span className="itemPrice">{price}</span>$</p>
                <p className="description">{desc}</p>
                <button className="addItem" data-id="7" onClick={this.buyItem(id)}>Add in cart</button>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Product);
