import React,{Fragment,Component} from "react";
import {connect} from "react-redux";

import TopBar from "../TopBar/TopBar";
import "./Cart.css";
class Cart extends Component{

    onClick= () => {
        this.props.itemsInCart.forEach(el => {
            this.props.BuyAllItemsInCart(el.id);
        });
    }

    render(){

        return <Fragment>
        <TopBar 
        ChangeWindow={this.props.ChangeWindow}
        />
        <div className="Cart">{this.props.items.map(el => <ul className="ItemsList" key={el.name.slice(0,10)}>
            <li>
                <ul className ="Name">
                    <li>{"Name:"}</li>
                    <li>{el.name}</li>
                </ul>
            </li>
            <li>
                <ul className="Description">
                    <li>{"Description:"}</li>
                    <li>{el.desc}</li>
                </ul>
            </li>
            <li>
                <ul className="Count">
                    <li>{"Count:"}</li>
                    <li>{el.count}</li>
                </ul>
            </li>
            </ul>)}
            <div id="BuyButton" onClick={this.onClick}>{"Buy All"}</div>
            </div>
        </Fragment>
    }
} 

const mapStoreToProps = (store) => ({
    items : store.cartItems.map(el => 
        ({...store.items.find(item => item.id === el.id), count: el.count}))
    })

export default connect(mapStoreToProps)(Cart);