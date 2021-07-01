import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart-{this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map((cartItem) => (
                        <DropdownItem key={cartItem.product.id}>
                            {cartItem.product.productName}
                            <Badge color="danger">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Empty Card</NavLink>
            </NavItem>
        );
    }

    render() {
        // let cartItems = this.props.cart;

        return (
            <div>
                {this.props.cart.length > 0
                    ? this.renderSummary()
                    : this.renderEmptyCart()}
            </div>
        );
    }
}
