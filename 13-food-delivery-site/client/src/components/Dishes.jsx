import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DishComponent = () => {
  const [dishes, setDishes] = useState([]);
  const [category, setCategory] = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllDishes();
  }, []);

  const getAllDishes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v4/getDishes');
      console.log(response.data)
      setDishes(response.data);
    } catch (error) {
      setError('Error fetching dishes');
    }
  };

  const getDishesByCategory = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v4/category/${category}`);
      setDishes(response.data);
    } catch (error) {
      setError('Error fetching dishes by category');
    }
  };

  const getDishesByRestaurant = async () => {
    try {
      // Implement your get dishes by restaurant functionality here
    } catch (error) {
      setError('Error fetching dishes by restaurant');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Dishes</h2>
      {error && <p className="text-red-500">{error}</p>}

      <ul className='flex flex-wrap gap-5'>
        {dishes.map((dish) => (
          <li key={dish._id} className="mb-4">

            <div className="bg-gray-200 p-4 rounded-md">
              <p className="text-lg font-semibold">{dish.name}</p>
              <p>Price: &#8377;{dish.price}</p>
              <p>Rating: {dish.rating}</p>
              <p>Category: {dish.category}</p>
              {dish.image && <img src={dish.image} alt={dish.name} className="mt-2 rounded-md w-36 h-40" />}
            </div>

           

          </li>

           
        ))}
      </ul>

    
    </div>
  );
};

export default DishComponent;
