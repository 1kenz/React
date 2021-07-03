import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';
import { Table, Button } from 'reactstrap';

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }

    render() {
        return (
            <div>
                <h2>
                    Products-
                    <span>{this.props.currentCategory.categoryName}</span>
                </h2>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <td>
                                    <Button color="danger">buy</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(
                productActions.getProducts,
                dispatch
            ),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
