import React,{Component} from "react";

import "./Items.css";
import {connect} from "react-redux";
import {AddItemInCart} from "../../controller/actions";

class Items extends Component{
    
    CreateItem({id,name,price,desc,pic}){
        return  <div key={id} className="element">
                    <div className="nameOfProduct">{name}</div>
                    <img className="product" src={pic} alt={name}/>
                    <div className="price">{price}$</div>
                    <div className="description"><p>{desc}</p></div>
                    <input type="button"  value="BUY" className="byProduct" onClick={() => this.props.AddItemInCart(id)}/>
                 </div>  
    }

  
    render(){
        return <div id="items">
                    {this.props.itemsStore.map(el => this.CreateItem(el))}
                </div>
    }
    
    
    
}

const mapStateToProps = (store) => ({
    itemsStore : store.items
  })
  
const mapDispatchToProps = (dispatch) => ({
    AddItemInCart : (...args) => dispatch(AddItemInCart(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Items);