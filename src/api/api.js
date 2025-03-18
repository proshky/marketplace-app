import {getProducts, getProduct, getProductColor, getSizes, getSize} from './fakeServerAPI'




export const getProductsAPI = {
    getProducts() {
        return getProducts()
            .then(response => {
                    return response
                }
            )
    },
    getProduct(id) {
        return getProduct(id)
            .then(response => {
                    return response
                }
            )
    },
    getProductColor(productID, colorID) {
        return getProductColor(productID, colorID)
            .then(response => {
                    return response
                }
            )
    },
    getSizes() {
        return getSizes()
            .then(response => {
                    return response
                }
            )
    },
    getProductSize(id) {
        return getSize(id)
            .then(response => {
                    return response
                }
            )
    }
}