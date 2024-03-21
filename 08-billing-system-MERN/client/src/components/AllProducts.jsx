import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

function AllProducts() {
  // State to store products
  const [products, setProducts] = useState([]);

  // Fetch products from backend when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);

        console.log(response)
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error, show error message to the user, etc.
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-10 justify-around m-9">
        {products.map(product => (
          <Product
            key={product._id} // Assuming product has an _id field
            previewImage={product.previewImage}
            name={product.name}
            ratings={product.ratings}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;