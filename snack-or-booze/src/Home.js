import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Home({ snacksCount, drinksCount }) {
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">Welcome to Snack or Booze!</h3>
                    </CardTitle>
                    <p>
                        We have {snacksCount} snacks and {drinksCount} drinks available.
                    </p>
                </CardBody>
            </Card>
        </section>
    );
}

export default Home;
