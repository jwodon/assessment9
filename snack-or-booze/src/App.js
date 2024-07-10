import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import FoodMenu from './FoodMenu';
import FoodItem from './FoodItem';
import NavBar from './NavBar';
import NotFound from './NotFound';
import SnackOrBoozeApi from './Api';
import AddItemForm from './AddItemForm';
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [snacks, setSnacks] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let snacksData = await SnackOrBoozeApi.getSnacks();
                let drinksData = await SnackOrBoozeApi.getDrinks();
                setSnacks(snacksData);
                setDrinks(drinksData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleAddItem = async (item) => {
        try {
            // Determine if it's a snack or drink based on item structure
            if ('recipe' in item) {
                await SnackOrBoozeApi.addDrink(item);
            } else {
                await SnackOrBoozeApi.addSnack(item);
            }

            let snacksData = await SnackOrBoozeApi.getSnacks();
            let drinksData = await SnackOrBoozeApi.getDrinks();
            setSnacks(snacksData);
            setDrinks(drinksData);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <div className="App">
            <Router>
                <NavBar />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home snacksCount={snacks.length} drinksCount={drinks.length} />
                        </Route>
                        <Route exact path="/snacks">
                            <FoodMenu items={snacks} type="snacks" />
                        </Route>
                        <Route path="/snacks/:id">
                            <FoodItem items={snacks} cantFind="/snacks" />
                        </Route>
                        <Route exact path="/drinks">
                            <FoodMenu items={drinks} type="drinks" />
                        </Route>
                        <Route path="/drinks/:id">
                            <FoodItem items={drinks} cantFind="/drinks" />
                        </Route>
                        <Route path="/add-item">
                            <AddItemForm addItem={handleAddItem} />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
