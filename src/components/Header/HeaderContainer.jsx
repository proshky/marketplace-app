import React from 'react';
import {connect} from "react-redux";
import Header from './Header';
import {compose} from "redux";


let HeaderContainer = props => {
    return (
        <Header/>
    )
};

let mapStateToProps = (state) => {
    return {}
}

let mapStateToDispatch = (dispatch) => {
    return {}
}


export default compose(
    connect(mapStateToProps, mapStateToDispatch)
)(HeaderContainer)

