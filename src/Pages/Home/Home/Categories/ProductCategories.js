import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCategory from './ProductCategory';



const ProductCategories = () => {
    const products = useLoaderData()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <section onClick={console.log('clicekd')}>
            <h2 className='text-center text-3xl font-semibold'>Product Categories</h2>
            <div className='flex justify-center'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   categories.map( category => <ProductCategory
                   key={category._id}
                   category={category}
                   ></ProductCategory>) 
                }
            </div>
            </div>
        </section>
    );
};

export default ProductCategories;