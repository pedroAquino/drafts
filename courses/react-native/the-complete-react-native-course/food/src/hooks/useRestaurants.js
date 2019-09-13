import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState('');

    const fetchRestaurants = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: { 
                    term: searchTerm, 
                    limit: 50, 
                    location: 'san jose' 
                }
            });
            setRestaurants(response.data.businesses);
        } catch(err) {
            setError('something went wrong');
        }
    };

    useEffect(() => {
        fetchRestaurants('pasta')
    }, []);

    return [fetchRestaurants, restaurants, error];
}