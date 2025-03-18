import React from 'react';
import sHeader from "./Header.module.css";


let Header = () => {
    let shoppingCartLogo = '/images/shopping cart/cart-arrow-down-svgrepo-com.svg'

    return (
        <header className={sHeader.header}>
            <div className={'shoppingCart'}>
                    <div>корзина</div>
                    <img className={sHeader.shoppingCart__shoppingCartImg} src={shoppingCartLogo} alt='корзина покупок'/>
            </div>
        </header>
    );
}


export default React.memo(Header);