import React from 'react';
import sElementColor from './ElementColor.module.css';



const ElementColor = ({ backgroundColor, colorName, onSetActiveColor, colorId, activeColor}) => {

    return (
        <div onClick={() => {
            onSetActiveColor({colorId:colorId, colorName: colorName});
        }} className={`${sElementColor.elementColor} ${colorId === activeColor.colorId ? sElementColor.activeElementColor : activeColor.colorId === null && colorId === 1 ? sElementColor.activeElementColor : '' }`}>
            <div>{colorName}</div>
            <div

                className={sElementColor.colorImage}
                style={{ backgroundColor }}
            ></div>
        </div>
    );
};

export default React.memo(ElementColor);