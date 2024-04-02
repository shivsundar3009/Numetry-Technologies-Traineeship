import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Merchandise from './Merchendise';

const MerchandiseList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <Merchandise key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MerchandiseList;