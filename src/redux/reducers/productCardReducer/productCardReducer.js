import {getProductsAPI} from "../../../api/api";

const GET_SIZES = `GET_SIZES`
const GET_PRODUCTS = `GET_PRODUCTS`
const SET_PRODUCTS = `SET_PRODUCTS`
const SET_PRODUCT_ID = `SET_PRODUCT_ID`
const SET_PRODUCT = `SET_PRODUCT`
const SET_COLORS = `SET_COLORS`
const SET_SIZES = `SET_SIZES`
const RESET_COLORS = `RESET_COLORS`
const RESET_PRODUCT = `RESET_PRODUCT`
const SET_ACTIVE_COLOR = `SET_ACTIVE_COLOR`
const RESET_ACTIVE_COLOR = `RESET_ACTIVE_COLOR`
const SET_ACTIVE_COLOR_ELEMENT = `SET_ACTIVE_COLOR_ELEMENT`
const RESET_ACTIVE_COLOR_ELEMENT = `RESET_ACTIVE_COLOR_ELEMENT`
const SET_ACTIVE_SIZE = `SET_ACTIVE_SIZE`
const SET_ACTIVE_ELEMENT_SIZES = `SET_ACTIVE_ELEMENT_SIZE`
const RESET_ACTIVE_ELEMENT_SIZES = `RESET_ACTIVE_ELEMENT_SIZES`

let initialProducts = {
    id: null,
    product: [],
    colors: [],
    activeColorElement: {},
    colorMap: {
        "черный": "#000000",
        "белый": "#FFFFFF",
        "синий": "#0000FF",
        "желтый": "#FFFF00",
        "серый": "#808080",
    },
    activeColor: {
        colorId: null,
        colorName: null
    },
    sizes: [],
    activeElementSizes: [],
    activeSizeId: null,
}


const productCardReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case GET_SIZES:
            return {
                ...state,
                sizes: action.sizes
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.arrayProducts
            }
        case SET_PRODUCT_ID:
            return {
                ...state,
                id: action.id
            }
        case SET_COLORS:
            return {
                ...state,
                colors: [...state.colors, action.colors],
            }

        case RESET_COLORS:
            return {
                ...state,
                colors: [],
            }

        case SET_ACTIVE_COLOR:
            return {
                ...state,
                activeColor: {...state.activeColor, colorId: action.color.colorId, colorName: action.color.colorName}
            }

        case RESET_ACTIVE_COLOR:
            return {
                ...state,
                activeColor: {}
            }

        case RESET_ACTIVE_COLOR_ELEMENT:
            return {
                ...state,
                activeColorElement: {/*...state.activeColor, colorId: null, colorName: null*/}
            }

        case SET_ACTIVE_COLOR_ELEMENT:
            return {
                ...state,
                activeColorElement: action.activeColorElement
            }

        case SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }

        case RESET_PRODUCT:
            return {
                ...state,
                product: []
            }

        case RESET_ACTIVE_ELEMENT_SIZES:
            return {
                ...state,
                activeElementSizes: []
            }

        case SET_SIZES:
            return {
                ...state,
                sizes: action.sizes
            }

        case SET_ACTIVE_SIZE:
            return {
                ...state,
                activeSizeId: action.sizeId
            }

        case SET_ACTIVE_ELEMENT_SIZES:
            return {
                ...state,
                activeElementSizes: [...state.activeElementSizes, action.activeElementSize]
            }


        default:
            return state
    }
}


export const setProductIdActionCreator = (id) => ({type: SET_PRODUCT_ID, id})
export const setProductAC = (product) => ({type: SET_PRODUCT, product})
export const setSizesAC = (sizes) => ({type: SET_SIZES, sizes})
export const setColors = (colors) => ({type: SET_COLORS, colors})
export const setActiveColor = (color) => ({type: SET_ACTIVE_COLOR, color})
export const setActiveColorElement = (activeColorElement) => ({type: SET_ACTIVE_COLOR_ELEMENT, activeColorElement})
export const setActiveSizeActionCreator = (sizeId) => ({type: SET_ACTIVE_SIZE, sizeId})
export const setActiveElementSizeAC = (activeElementSize) => ({type: SET_ACTIVE_ELEMENT_SIZES, activeElementSize})



export const resetColors = () => ({type: RESET_COLORS})
export const resetProduct = () => ({type: RESET_PRODUCT})
export const resetActiveColor = () => ({type: RESET_ACTIVE_COLOR})
export const resetActiveColorElement = () => ({type: RESET_ACTIVE_COLOR_ELEMENT})
export const resetActiveElementSizes = () => ({type: RESET_ACTIVE_ELEMENT_SIZES})



//санки

export const getProductSizeThunk = (sizeId) => {
    return async (dispatch) => {
        try {
            const response = await getProductsAPI.getProductSize(sizeId);
            dispatch(setActiveElementSizeAC(response));
        } catch (error) {
            console.error("Failed to fetch product color:", error);
        }
    };
};


export const resetProductCardThunk = () => {
    return async (dispatch) => {
        dispatch(resetColors())
        dispatch(resetProduct())
        dispatch(resetActiveColor())
        dispatch(resetActiveColorElement())
    };
};

export const setProduct = (id) => {
    return async (dispatch) => {
        try {
            if (id) {
                const response = await getProductsAPI.getProduct(id);
                dispatch(setProductAC(response));
            } else {
                dispatch(setProductAC([]));
            }
        } catch (error) {
            console.error("Failed to fetch product:", error);
        }
    };
};

export const getProductColorAC = (productID, colorID) => {
    return async (dispatch) => {
        try {
            const response = await getProductsAPI.getProductColor(productID, colorID);
            dispatch(setColors(response));
        } catch (error) {
            console.error("Failed to fetch product color:", error);
        }
    };
};

export const getSizesAC = () => {
    return async (dispatch) => {
        try {
            const response = await getProductsAPI.getSizes();
            dispatch(setSizesAC(response));
        } catch (error) {
            console.error("Failed to fetch sizes:", error);
        }
    };
};


export default productCardReducer
