// Product.js
import React from 'react';

function Product({ previewImage, name, ratings, price }) {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 4);

  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="">
      <div className='flex justify-center'>
        <img className="h-72" src={previewImage} alt={name} />
      </div>
      <div className="">
        <div className="">{name}</div>
        <div className='flex justify-between'>
          <p className="">Rating: {ratings}</p>
          <p className="">Price: {price}</p>
        </div>
        <p className="">Estimated Delivery: {formattedDeliveryDate}</p>
      </div>
    </div>
  );
}

export default Product;