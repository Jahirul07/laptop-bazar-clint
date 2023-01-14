import React from 'react';

const ProductCard = ({product, setOrderInfo}) => {
    const {img, name, location, number, purchasedYear, originalPrice, resellPrice, yearsOfUse,sellerName} = product;
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl p-8">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{name}</div>
        </h2>
        <div className='leading-normal'>
        <p>Location: {location}</p>
        <p>Number: {number}</p>
        <p>sellerName: {sellerName}</p>
        <p>purchasedYear: {purchasedYear}</p>
        <p>originalPrice: {originalPrice}</p>
        <p>resellPrice: {resellPrice}</p>
        <p>yearsOfUse: {yearsOfUse}</p>
        </div>
        <label onClick={() => setOrderInfo(product)} htmlFor="booking-modal" className="btn btn-primary">Order Now</label>
      </div>
    </div>
        </div>
    );
};

export default ProductCard;