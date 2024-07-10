import axios from 'axios';

const BASE_API_URL = 'http://localhost:5000';

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/
class SnackOrBoozeApi {
    static async getSnacks() {
        try {
            const response = await axios.get(`${BASE_API_URL}/snacks`);
            return response.data;
        } catch (error) {
            console.error('Error fetching snacks:', error);
            throw error;
        }
    }

    static async getDrinks() {
        try {
            const response = await axios.get(`${BASE_API_URL}/drinks`);
            return response.data;
        } catch (error) {
            console.error('Error fetching drinks:', error);
            throw error;
        }
    }

    static async addDrink(drink) {
        try {
            const response = await axios.post(`${BASE_API_URL}/drinks`, drink);
            return response.data;
        } catch (error) {
            console.error('Error adding drink:', error);
            throw error;
        }
    }

    static async addSnack(snack) {
        try {
            const response = await axios.post(`${BASE_API_URL}/snacks`, snack);
            return response.data;
        } catch (error) {
            console.error('Error adding snack:', error);
            throw error;
        }
    }
}

export default SnackOrBoozeApi;
