import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'; // Import axios for making HTTP requests
import img from "../assets/demoProducts/fan.jpg";

function Cart() {
  const [products, setProducts] = useState([]); // State to store products
  const [totalCartValue, setTotalCartValue] = useState(0); // State to store total cart value
  const [totalPayableAmount, setTotalPayableAmount] = useState(0); // State to store total payable amount with GST

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
   
  

  return (
    <>
      <Header />
      <div>
        <div>
          <h1 className="text-2xl">Welcome To Your Cart</h1>
          <h2 className="text-2xl">Shivsundar You Have {products.length} Items in Your Cart</h2>
        </div>

        <div className="flex">
          <div className="flex flex-col gap-10 h-full">
         
          </div>
          <div>
            <h2 className="text-3xl text-center">
              Your Total Amount Payable Amount: total cart value is {totalCartValue}
            </h2>
            <h2 className="text-3xl text-center">
              Total Payable Amount with GST: {totalPayableAmount}
            </h2>
          </div>
        </div> 
      </div>
      <Footer />
    </>
  );
}

export default Cart;