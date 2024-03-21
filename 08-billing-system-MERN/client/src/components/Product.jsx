import React from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

function Product({ previewImage, name, ratings, price }) {
  // Calculate delivery date 4 days from the current date
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 4);

  // Format delivery date as "Day, Month Date, Year"
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Function to handle the "Add to Cart" button click
  const addToCartHandler = async () => {
    try {
      // Send product information to the backend
      await axios.post('/cart/add', {
        price,
        quantity:1
      });
      // Optionally, you can show a success message or update the UI accordingly
      console.log('Product added to cart successfully');
    } catch (error) {
      // Handle errors appropriately
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="w-1/4 rounded overflow-hidden shadow-lg border-2 border-gray-800 ">
      <div className='flex justify-center m-5'>
        <img className="w-52" src={previewImage} alt={name} />
      </div>
      <div className="px-6 py-4">
        <div className=" mb-2">{name}</div>
        <div className='flex justify-between'>
          <p className="text-gray-700 text-base mb-2">Rating: {ratings}</p>
          <p className="text-gray-700 text-base mb-2">Price: {price}</p>
        </div>
        <p className="text-gray-700 text-base">Estimated Delivery: {formattedDeliveryDate}</p>
      </div>
      <div className="px-6 py-4">
        {/* Add to Cart button with onClick event handler */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;