import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function CategoryList(props) {
    let title = props.title;

    return (
        <div>
            <h2>{title}</h2>
            <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </div>
    );
}
