// AddItemForm.js
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SnackOrBoozeApi from './Api';

function AddItemForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [recipe, setRecipe] = useState('');
    const [serve, setServe] = useState('');
    const [type, setType] = useState('drink');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name, description, recipe, serve };

        try {
            if (type === 'drink') {
                await SnackOrBoozeApi.addDrink(newItem);
            } else if (type === 'snack') {
                await SnackOrBoozeApi.addSnack(newItem);
            }
            setName('');
            setDescription('');
            setRecipe('');
            setServe('');
            setType('drink');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add New Item</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter item name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Enter item description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="recipe">Recipe</Label>
                    <Input
                        type="textarea"
                        name="recipe"
                        id="recipe"
                        placeholder="Enter item recipe (if applicable)"
                        value={recipe}
                        onChange={(e) => setRecipe(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="serve">Serve</Label>
                    <Input
                        type="text"
                        name="serve"
                        id="serve"
                        placeholder="Enter serving instructions"
                        value={serve}
                        onChange={(e) => setServe(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type">Type</Label>
                    <Input type="select" name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="drink">Drink</option>
                        <option value="snack">Snack</option>
                    </Input>
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        </div>
    );
}

export default AddItemForm;
