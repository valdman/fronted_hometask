import React, { Component } from "react";
import { connect } from "react-redux";

import ItemCard from "../../components/ItemCard/ItemCard";
import fetchItems from "../../fetchUtils/fetchItems";

import store from "../../store/store";
import { addToCartAction, addItemsAction } from "../../actions/actions";

import "./ItemContainer.css";

const mapStateToProps = (state) => ({ items: state.items });

const mapDispatchToProps = dispatch => (
    { addToCart: id => dispatch(addToCartAction(id)) }
);

class ItemContainer extends Component {

    componentDidMount() {
        fetchItems()
            .then((res) => {
                store.dispatch(addItemsAction(res));
            });
    }

    render() {
        console.log(this.props)
        return (
            <div className="ItemContainer">
                {this.props.items.map(item => <ItemCard
                    id={item.id}
                    desc={item.desc}
                    name={item.name}
                    price={item.price}
                    key={item.id}
                    oncklick={this.props.addToCart.bind(null, item.id)}
                ></ItemCard>)}
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);