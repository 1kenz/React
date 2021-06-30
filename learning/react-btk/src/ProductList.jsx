import React from 'react';

export default function ProductList(props) {
    let title = props.info.title;
    let currentCategory = props.currentCategory;

    return (
        <div>
            <h2>{title}</h2>
            <h3>{currentCategory}</h3>
        </div>
    );
}
