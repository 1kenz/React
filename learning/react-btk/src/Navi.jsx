import React, { useState } from 'react';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';
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
                        <NavItem>
                            <NavLink>
                                <Link to="/form1/">Form Demo 1</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/form2/">Form Demo 2</Link>
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
