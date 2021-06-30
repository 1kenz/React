import React from 'react';

export default function ProductList(props) {
    let title = props.info.title;

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}
