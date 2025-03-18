import React from 'react';
import Product from "./Product/Product";

let Products = ({onSetProductId, products}) => {
    let elementProducts = products.map(({id, name, colors}) => <Product onSetProductId={onSetProductId} id={id}
                                                           name={name} images={colors[0].images}
                                                           key={id}/>)
    return (
        <div>
            <div>{elementProducts}</div>
        </div>

    );
}

export default React.memo(Products);


