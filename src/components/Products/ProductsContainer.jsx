import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Products from './Products';
import {compose} from "redux";
import {
    getArrayProducts
} from "../../redux/reducers/productsReducer/productsSelectors";
import {requestProducts} from "../../redux/reducers/productsReducer/productsReducer";
import {setProductIdActionCreator} from "../../redux/reducers/productCardReducer/productCardReducer";


let ProductsContainer = ({products, requestProducts, setProductIdActionCreator}) => {
    useEffect(() => {
        requestProducts()
    }, [])

    const onSetProductIdActionCreator = (id) => {setProductIdActionCreator(id)}

    return (<Products products={products} onSetProductId={onSetProductIdActionCreator}/>)
}

const mapStateToProps = (state) => ({
    products: getArrayProducts(state)
});

const mapDispatchToProps = {
    requestProducts,
    setProductIdActionCreator
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsContainer);


