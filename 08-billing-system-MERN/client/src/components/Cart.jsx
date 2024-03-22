import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'; // Import axios for making HTTP requests
import img from "../assets/demoProducts/fan.jpg";

function Cart() {
  const [products, setProducts] = useState([]); // State to store products

  const totalCartValue = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  const totalPayableAmount = () => {
    const totalAmount = totalCartValue();
    return totalAmount + (totalAmount * 0.018); // Adding 1.8% GST
  }

  // Function to fetch all items from the cart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart/items');
        setProducts(response.data);

        console.log(response)
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error, show error message to the user, etc.
      }
    };

    fetchProducts();
  }, []);

  // Function to handle quantity change
 // Function to handle quantity change
const handleQuantityChange = async (productId, newQuantity) => {
  try {
    // Make the PUT request to update the quantity
    const response = await axios.put("http://localhost:3000/cart/update", {
      productId,
      quantity: newQuantity
    });
    
    console(response)
    // If the request is successful, update the products state
    // if (response.status === 200) {
    //   // Update the quantity of the product in the products state
    //   const updatedProducts = products.map(product => {
    //     if (product._id === productId) {
    //       return { ...product, quantity: newQuantity };
    //     }
    //     return product;
    //   });

    //   console.log(updatedProducts)

    //   // Set the updated products state
    //   setProducts(updatedProducts);
    // }
  } catch (error) {
    console.error('Error updating quantity cathHH:', error);
    // Handle error, show error message to the user, etc.
  }
};

  return (
    <>
      <Header />
      <div>
        <div>
          <h1 className="text-2xl">Welcome To Your Cart</h1>
          <h2 className="text-2xl">Shivsundar You Have {products.length} Items in Your Cart</h2>
        </div>

        <div className="flex justify-around">
          <div className="flex flex-col gap-10 h-full">
            {products.map((product, index) => (
              <div key={index} className="flex items-center justify-around border-b-2 border-gray-200 py-2 h-60 gap-4">
                <img src={product.image} alt={product.name} className=" h-40" />
                <div className='text-wrap w-1/2'>
                  <p>{product.name}</p>
                  <p>Price: &#8377; {product.price}</p>
                </div>
                <div>
                  <button onClick={() => handleQuantityChange(product._id, product.quantity - 1)} className="px-3 py-1 bg-red-500 text-white">-</button>
                  <span className="px-3 py-1">{product.quantity}</span>
                  <button onClick={() => handleQuantityChange(product._id, product.quantity + 1)} className="px-3 py-1 bg-green-500 text-white">+</button>
                </div>
              </div>
            ))}
          </div>
          <div className='text-wrap w-1/3'>
            <h2 className="text-3xl text-center">
              Your Total Amount Payable Amount: total cart value is &#8377; {totalCartValue()}
            </h2>
            <h2 className="text-3xl text-center">
              Total Payable Amount with GST: &#8377; {totalPayableAmount()}
            </h2>
          </div>
        </div> 
      </div>
      <Footer />
    </>
  );
}

export default Cart;