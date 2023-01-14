import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const { user } = useContext(AuthContext);
    
    
      const [productCategories, setProductCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setProductCategories(data))
    }, [])
    
      const handleAddProduct = (data) => {

        const product = {
            name: data.name,
            price: data.price,
            location: data.location,
            number: data.number,
            conditionType: data.conditionType,
            description: data.description,
            category: data.category,
            purchasedYear: data.purchasedYear,
            originalPrice: data.originalPrice,
            resellPrice: data.resalePrice,
            yearsOfUse: data.yearsOfUse,
            sellerName: user?.displayName,
            postedDate: new Date(),
            img: data.img,
            email: user?.email
          };

          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
            });
      };
    return (
        <div className="w-full p-7">
      <h2 className="text-4xl text-center my-5">Add A <span className='text-orange-500'>Product</span></h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>

        <div className="grid grid-cols-2 gap-2">
 

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            {...register("originalPrice", {
              required: "Original Price is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.originalPrice && (
            <p className="text-red-500">{errors.originalPrice.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Resell Price</span>
          </label>
          <input
            type="number"
            {...register("resalePrice", {
              required: "Resale Price is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.resalePrice && (
            <p className="text-red-500">{errors.resalePrice.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Years of Use</span>
          </label>
          <input
            type="text"
            {...register("yearsOfUse", {
              required: "Year is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.yearsOfUse && (
            <p className="text-red-500">{errors.yearsOfUse.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: "Location is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="number"
            {...register("number", {
              required: "Mobile Number is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.number && (
            <p className="text-red-500">{errors.number.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Condition Type</span>
          </label>
          <select
            {...register("conditionType")}
            className="select input-bordered w-full "
          >
            <option value="fair">Fair</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
          </select>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("description", {
              required: "Description is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Product Category</span>
          </label>
          <select
            {...register("category")}
            className="select input-bordered w-full "
          >
            {productCategories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Purchase Year</span>
          </label>
          <input
            type="number"
            {...register("purchasedYear", {
              required: "Purchase Year is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.purchasedYear && (
            <p className="text-red-500">{errors.purchasedYear.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Photo Link</span>
          </label>
          <input
            type="text"
            {...register("img", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full "
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        </div>
        <div className='flex justify-center'>
        <input
          className="btn btn-accent mt-4"
          value="Add Product"
          type="submit"
        />
        </div>
      </form>
    </div>


    );
};

export default AddProduct;