import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';

export class cartDetail extends Component {
    render() {
        return (
            <div>
                <h1>Cart Details</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        removeFromCart: bindActionCreators(
            cartActions.removeFromCart,
            dispatch
        ),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(cartDetail);
