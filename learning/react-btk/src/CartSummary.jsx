import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

export default class CartSummary extends Component {
    render({ cart }) {
        // let cartItems = this.props.cart;

        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Cart-{cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}
