import React, { useState } from 'react';
import CartSummary from './CartSummary';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">DNZ Security & Software</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/xkendx">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <CartSummary
                            removeFromCart={props.removeFromCart}
                            cart={props.cart}
                        />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navi;
