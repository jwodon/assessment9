import React from 'react';
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './FoodMenu.css';

function FoodMenu({ items, type }) {
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {type === 'snacks' ? 'Snacks' : 'Drinks'}
                    </CardTitle>
                    <ListGroup>
                        {items.map(item => (
                            <Link to={`/${type}/${item.id}`} key={item.id}>
                                <ListGroupItem>{item.name}</ListGroupItem>
                            </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    );
}

export default FoodMenu;
