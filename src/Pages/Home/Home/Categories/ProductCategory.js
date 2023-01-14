import React from "react";

const ProductCategory = ({ category }) => {
  const { name, img } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-10 my-14 cursor-pointer">
      <figure>
        <img className=" w-36" src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default ProductCategory;
