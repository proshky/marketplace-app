import sProductCard from "./ProductСard.module.css";
import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import ElementColorContainer from "./ElementColor/ElementColorContainer";
import ElementSizeContainer from "./ElementSize/ElementSizeContainer";

let ProductCard = ({activeElementSizes, activeSizeId, product, activeColorElement}) => {
    const [img, setImg] = useState(0);

    const handleNextImage = () => {
        if (activeColorElement && img < (activeColorElement.images.length - 1)) {
            setImg(img + 1);
        }
    };

    const handlePrevImage = () => {
        if (img > 0) {
            setImg(img - 1);
        }
    };
    return (
        <div className={sProductCard.ProductCard}>
            <NavLink to='/products'>
                <div>назад</div>
            </NavLink>
            <div className={sProductCard.imageContainer}>
                {activeColorElement && activeColorElement.images && activeColorElement.images.length > 0 ? (
                    <img className={sProductCard.productImg} src={activeColorElement.images[img]} alt="Product" />
                ) : 'загрузка'}
                <div className={sProductCard.arrowButtons}>
                    <button onClick={handlePrevImage} className={sProductCard.arrowButton}>&lt;</button>
                    <button onClick={handleNextImage} className={sProductCard.arrowButton}>&gt;</button>
                </div>
            </div>
            <div>{product ? product.name : 'Загрузка...'}</div>
            <ElementColorContainer />
            {Object.keys(activeColorElement).length !== 0 && activeColorElement.sizes.length === 0 ? (
                <div>товара нет в наличии</div>
            ) : (
                <>
                    <ElementSizeContainer />
                    <div>
                        <div>
                            {product && product.colors && product.colors.length > 0
                                ? <div>цвет: {activeColorElement.name}</div>
                                : <div></div>}
                        </div>
                        <div>размер: {Object.keys(activeElementSizes).length !== 0 ? <span> {activeElementSizes.find(size => activeSizeId==size.id).label}</span>: <div></div>}</div>
                        <div>
                            {activeColorElement
                                ? <div>цена: {activeColorElement.price} р.</div>
                                : <div></div>}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}


export default React.memo(ProductCard);