import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const Products = () => {
    const products = useLoaderData()
    const [orderInfo, setOrderInfo] = useState(null)
  return (
    <div className="my-14">
        <h2 className="text-center text-3xl my-6">Total Product <span className="text-orange-500">{products.length}</span></h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(product => <ProductCard
                key={product._id}
                product={product}
                setOrderInfo={setOrderInfo}
                ></ProductCard>)
            }
        </div>
        {orderInfo && <ProductModal
        orderInfo={orderInfo}
        setOrderInfo={setOrderInfo}
        ></ProductModal>}
    </div>
  );
};

export default Products;
