import React,{Component} from "react";

import "./Items.css";


class Items extends Component{
    
    CreateItem({id,name,price,desc,pic}){
        return  <div key={name.slice(0,10)} id={id} className="element">
                    <div className="nameOfProduct">{name}</div>
                    <img className="product" src={pic} alt={name}/>
                    <div className="price">{price}$</div>
                    <div className="description"><p>{desc}</p></div>
                    <input id={id} type="button"  value="BUY" className="byProduct" onClick={this.onClick}/>
                 </div>  
    }
    onClick = (e) => {
        this.props.BuyItem(e.target.id);
    }

  
    render(){
        let items = this.props.items;
        return <div id="items">{items.map(el => this.CreateItem(el))}</div>
    }
    
    
    
}

export default Items;