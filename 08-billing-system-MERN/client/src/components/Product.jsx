import React from 'react';

function Product({ prevImg, name, rating, price, deliveryDate }) {
  return (
    <div className="w-1/4 rounded overflow-hidden shadow-lg border-2 border-gray-800 ">

      <div className='flex justify-center m-5'>
      <img className="w-52"  src={prevImg} alt={name} />

      </div>
      <div className="px-6 py-4">
        <div className=" mb-2">{name}</div>
        <div className='flex justify-between'>

        <p className="text-gray-700 text-base mb-2">Rating: {rating}</p>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
        </div>
        <p className="text-gray-700 text-base">Estimated Delivery: {deliveryDate}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;