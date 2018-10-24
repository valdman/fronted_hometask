import React, { Component } from 'react';

import Product from '../../components/Product/Product';

class Goods extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         products: []
    //     }
    // }

    // componentDidMount() {
    //     fetch("http://localhost:3001/items")
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState(() => ({
    //                 products: res
    //             }))
    //         });
    // }

    render() {
        const { products } = this.props;

        return (
            <div>
                {products.map(product => {
                    const {id, desc, name, pic, price} = product;

                    return <Product
                        id={id}
                        desc={desc}
                        name={name}
                        pic={pic}
                        price={price}
                        key={id}
                    />
                }
                )}
            </div>
        );
    }
}

export default Goods;