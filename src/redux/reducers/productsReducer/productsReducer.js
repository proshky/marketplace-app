import {getProductsAPI} from "../../../api/api";

const SET_PRODUCTS = `SET_PRODUCTS`


let initialProducts = {
    products: []
}


const productsReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.arrayProducts
            }


        default:
            return state
    }
}


export const setProducts = (arrayProducts) => ({type: SET_PRODUCTS, arrayProducts})


//санки
export const requestProducts = () => {
    return (dispatch) => {

        getProductsAPI.getProducts()
            .then(response => {
                dispatch(setProducts(response))
            })
    }
}


export default productsReducer
