import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ElementColor from "./ElementColor";
import {getColorMap, getColors, getProduct, getActiveColor} from "../../../redux/reducers/productCardReducer/productCardSelectors";
import {
    getProductColorAC, setActiveColor,
} from "../../../redux/reducers/productCardReducer/productCardReducer";
import {compose} from "redux";
import sElementColor from './ElementColor.module.css';


let ElementColorContainer = ({colors, setActiveColor, colorMap, getProductColorAC, product, activeColor}) => {
    useEffect(() => {
        if (product.colors) {
            product.colors.map(color => {
                getProductColorAC(product.id, color.id);
            });
        }
    }, [product]);

    // Создаем массив компонентов ElementColor с правильным цветом фона
    let elementColor = colors.map(color => {
        // Получаем цвет фона из colorMap по имени цвета
        const backgroundColor = colorMap[color.name] || '#FFFFFF';

        return (
            <ElementColor
                key={`color-${color.id}`}
                onSetActiveColor={setActiveColor}
                backgroundColor={backgroundColor}
                colorName={color.name}
                colorId={color.id}
                colorMap={colorMap}
                activeColor={activeColor}
            />
        );
    });

    return (
        <div className={sElementColor.elementsColor}>
            {elementColor}
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        colorMap: getColorMap(state),
        product: getProduct(state),
        colors: getColors(state),
        activeColor: getActiveColor(state)
    };
};

const mapDispatchToProps = {
    getProductColorAC,
    setActiveColor
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ElementColorContainer);
