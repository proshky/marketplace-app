import React from 'react';
import sProduct from "./Product.module.css";
import {NavLink} from 'react-router-dom';

const Product = ({id, images, name, onSetProductId}) => {
    return (
        <NavLink onClick={() => {
            onSetProductId(id)
        }} to={`/productCard/${id}`} className={sProduct.product}>
            <img className={sProduct.productImg} src={images[0]} alt='футболка чёрная'/>
            <div className={sProduct.productName}>{name}</div>
        </NavLink>
    )
}
export default React.memo(Product)