import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
} from 'reactstrap';

export class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        );
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map((cartItem) => (
                        <DropdownItem key={cartItem.product.id}>
                            {cartItem.product.productName} {cartItem.quantity}
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>Go to Cart</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0
                    ? this.renderSummary()
                    : this.renderEmpty()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
