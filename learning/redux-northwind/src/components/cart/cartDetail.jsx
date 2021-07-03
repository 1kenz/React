import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import { Table, Button } from 'reactstrap';
import alertify from 'alertifyjs';

export class cartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + ' deleted.');
    }

    render() {
        return (
            <div>
                <h1>Cart Details</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((cartItem) => (
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button
                                        color="danger"
                                        onClick={() =>
                                            this.removeFromCart(
                                                cartItem.product
                                            )
                                        }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
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
