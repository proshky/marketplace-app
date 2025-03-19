import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";
import ProductCard from './ProductCard';
import {
    getProductIdActionCreator,
    getProduct,
    getColors,
    getActiveColorElement,
    getActiveColor,
    getActiveSizeId, getActiveElementSizes
} from "../../redux/reducers/productCardReducer/productCardSelectors";
import {getArrayProducts} from "../../redux/reducers/productsReducer/productsSelectors";
import {
    setProduct,

    getSizesAC,
    setActiveColorElement,
    setActiveColor,
    resetProductCardThunk,
    setActiveSizeActionCreator,
    setProductIdActionCreator,
    resetActiveElementSizes,
    getProductSizeThunk
} from "../../redux/reducers/productCardReducer/productCardReducer";
import {compose} from "redux";

let ProductCardContainer = ({activeElementSizes, activeSizeId, getProductSizeThunk ,setProduct, getSizesAC, product, activeColorElement, setActiveColorElement, activeColor, setActiveColor, resetProductCardThunk, id,  setActiveSizeActionCreator, setProductIdActionCreator, resetActiveElementSizes}) => {



    // получаем id из url
    const location = useLocation();
    const currentUrl = location.pathname;
    const match = currentUrl.match(/productCard\/(\d+)/);

    useEffect(() => {

        setProductIdActionCreator(parseInt(match[1], 10));
        setProduct(id);
        getSizesAC();

        return () => {
            resetProductCardThunk()
        };
    }, [id]);

    useEffect(() => {
        if (product.colors) {
            let colors = []
            product.colors.map(color => {
               colors.push({colorId: color.id, colorName: color.name})
            });
            setActiveColor(colors[0]); // Устанавливаем первый цвет как активный
        }
    }, [product]);

    useEffect(() => {
        if (product.colors) {
            let colorElement = product.colors.find(colorElement => colorElement.id === activeColor.colorId)
            setActiveColorElement(colorElement)
        }
    }, [activeColor]);


    useEffect(() => {
        resetActiveElementSizes()

        if (Object.keys(activeColorElement).length !==0) {
            setActiveSizeActionCreator(activeColorElement.sizes[0])
            activeColorElement.sizes.map(size => {
                getProductSizeThunk(size);
            });
        }
    }, [activeColorElement]);


    return (
        <div>
            <ProductCard
                activeElementSizes={activeElementSizes}
                activeSizeId={activeSizeId}
                activeColorElement={activeColorElement}
                product={product}
                id={id}
            />
        </div>
    );
};

let mapStateToProps = (state) => ({
    products: getArrayProducts(state),
    id: getProductIdActionCreator(state),
    product: getProduct(state),
    colors: getColors(state),
    activeColor: getActiveColor(state),
    activeColorElement: getActiveColorElement(state),
    activeSizeId: getActiveSizeId(state),
    activeElementSizes: getActiveElementSizes(state)
});

const mapDispatchToProps = {
    setActiveSizeActionCreator,
    setProductIdActionCreator,
    setProduct,
    getSizesAC,
    setActiveColorElement,
    setActiveColor,
    resetProductCardThunk,
    resetActiveElementSizes,
    getProductSizeThunk
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ProductCardContainer);


