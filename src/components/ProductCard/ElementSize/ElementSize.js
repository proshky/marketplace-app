import React from 'react';
import sElementSize from "../ElementSize/ElementSize.module.css";


const ElementSize = ({id, label, number, onSetActiveSize, activeSizeId}) => {

    return (
        <div onClick={() => {
            onSetActiveSize(id);
        }} className={`${sElementSize.elementSize} ${activeSizeId === id ? sElementSize.activeSizeColor : ''}`}>
            <div> {label}</div>
            <div> {number}</div>
        </div>
    )
}
export default React.memo(ElementSize)