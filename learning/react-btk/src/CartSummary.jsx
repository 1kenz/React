import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

export default class CartSummary extends Component {
    render() {
        // let cartItems = this.props.cart;

        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Cart-{this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {this.props.cart.map((cartItem) => (
                            <DropdownItem key={cartItem.product.id}>
                                {cartItem.product.productName}
                            </DropdownItem>
                        ))}
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}
