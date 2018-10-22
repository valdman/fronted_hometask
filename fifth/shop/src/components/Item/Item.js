import React, { Component } from 'react';
import {connect} from 'react-redux';
import {buy} from '../../redux/actions/buy';

import {makeBuyRequest} from '../../requests';

import BuyBtn from '../BuyButton/BuyButton';

import './Item.css'

const mapDispatchToProps = dispatch => {
   return {
      buy: (id) => dispatch(buy(id))
   }
}

class Item extends Component {
   buy = (id) => {
      makeBuyRequest(this.props.id)
         .then(res => res.status)
         .then(status => {
            if (status === 200)
               this.props.buy(id);
         })
   }

   render() {
      const { id, pic, name, description, price, showButton } = this.props;

      return (
         <div className="item">
            <div className="img-wrapper">
               <img src={pic} alt={id} />
            </div>
            <div className="text-wrapper">
               <p>{name}</p>
               <p>{description}</p>
               <p>Price: {price}$</p>
            </div>

            <div style={{display: showButton ? "block" : "none"}} className="btn-wrapper">
               <BuyBtn text="Buy" id={id} buy={() => {this.buy(id)}}/>
            </div>
         </div>
      )
   }
}

export default connect(null, mapDispatchToProps)(Item);