export const getProductIdActionCreator = (state) => {
    return state.productCardPage.id
}

export const getColors = (state) => {
    return state.productCardPage.colors
}

export const getProduct = (state) => {
    return state.productCardPage.product
}

export const getColorMap = (state) => {
    return state.productCardPage.colorMap
}

export const getSizes = (state) => {
    return state.productCardPage.sizes
}

export const getActiveColor = (state) => {
    return state.productCardPage.activeColor
}

export const getActiveColorElement = (state) => {
    return state.productCardPage.activeColorElement
}

export const getActiveSizeId = (state) => {
    return state.productCardPage.activeSizeId
}

export const getActiveElementSizes = (state) => {
    return state.productCardPage.activeElementSizes
}
