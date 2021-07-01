import React from 'react';
import { Table } from 'reactstrap';

export default function ProductList(props) {
    let title = props.info.title;
    let currentCategory = props.currentCategory;
    let products = props.products;

    return (
        <div>
            <h2>{title}</h2>
            <h3>{currentCategory}</h3>

            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Units In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitsInStock}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
