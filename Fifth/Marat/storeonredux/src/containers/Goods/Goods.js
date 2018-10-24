import React from 'react';

import Product from '../../components/Product/Product';

const Goods = ({ products, ...props }) =>
    products.map(product =>
        <Product
            key={product.id}
            {...product}
            {...props}
        />
    );

export default Goods;