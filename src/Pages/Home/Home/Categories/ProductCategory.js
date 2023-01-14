import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCategory = ({ category }) => {
  const navigate = useNavigate()
  const { name, img } = category;
  const handleCategoryDetails = (name) =>{
    navigate(`category/${name}`)
  }
  return (
    <div onClick={() => handleCategoryDetails(name)} className="card w-96 bg-base-100 shadow-xl p-10 my-14 cursor-pointer">
      <figure>
        <img className=" w-36" src={img} alt="" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default ProductCategory;
