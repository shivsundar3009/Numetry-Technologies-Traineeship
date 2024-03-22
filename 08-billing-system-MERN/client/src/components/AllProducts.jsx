import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle adding a product to the cart
  const addToCartHandler = async (productId, name, image, price) => {
    try {
      await axios.post('http://localhost:3000/cart/add', {
        productId,
        name,
        image,
        price,
        quantity: 1 // Assuming default quantity is 1
      });
      console.log('Product added to cart successfully');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Hide popup after 0.5 seconds
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
      {showPopup && (
        <div className="fixed top-0 right-0 bg-green-500 text-white p-2 m-2 rounded-lg">
          Item added to cart
        </div>
      )}

      <div className="flex flex-wrap gap-10 justify-around m-9">
        {products.map(product => (
          <div key={product._id} className='flex flex-col gap-3 border-2 border-gray-600 p-5 w-1/4 h-1/3'>
            <Product
              previewImage={product.previewImage}
              name={product.name}
              ratings={product.ratings}
              price={product.price}
            />

            <div>
              <button onClick={() => addToCartHandler(product._id, product.name, product.previewImage, product.price)} className='bg-blue-600 p-3 rounded-lg border border-transparent text-white font-semibold hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 '>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;