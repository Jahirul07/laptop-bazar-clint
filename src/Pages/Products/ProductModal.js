import React from 'react';

const ProductModal = () => {
    const handleBooking = () => {

    }
    return (
        <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full ">
              
            </select>
            <input
            name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
            name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <input
            name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
    );
};

export default ProductModal;