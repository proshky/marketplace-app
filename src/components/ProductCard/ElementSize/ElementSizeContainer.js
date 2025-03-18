import React from 'react';
import {connect} from "react-redux";
import ElementSize from "./ElementSize";
import {
    getActiveSizeId,
    getActiveElementSizes
} from "../../../redux/reducers/productCardReducer/productCardSelectors";
import {
    setActiveSizeActionCreator,
} from "../../../redux/reducers/productCardReducer/productCardReducer";
import {compose} from "redux";
import sElementSize from './ElementSize.module.css';


let ElementSizeContainer = ({activeSizeId, setActiveSizeActionCreator, activeElementSizes}) => {

    let elementSize = activeElementSizes.map(size => {

        return (
            <ElementSize
                onSetActiveSize={setActiveSizeActionCreator}
                key={`size-${size.id}`}
                id={size.id}
                label={size.label}
                number={size.number}
                activeSizeId={activeSizeId}
            />
        );
    });

    return (
        <div className={sElementSize.elementsSize}>{elementSize}</div>
    );
};

let mapStateToProps = (state) => {
    return {
        activeSizeId: getActiveSizeId(state),
        activeElementSizes: getActiveElementSizes(state)
    };
};

const mapDispatchToProps = {
    setActiveSizeActionCreator
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ElementSizeContainer);
