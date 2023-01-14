import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const ProductModal = ({ orderInfo, setOrderInfo }) => {
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const productName = orderInfo.name
    const booking = {
        userName: name,
        email,
        phone,
        productName
      }
    fetch('http://localhost:5000/booking', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        if (data.acknowledged) {
            toast.success("Order Confirm");
            form.reset();
          }
    })
    .catch(err => console.error(err));
    setOrderInfo(null);
  };
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
          <h3 className="text-lg font-bold">{orderInfo.name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
            name="name"
              defaultValue={user?.displayName}
              type="text"
              disabled
              className="input input-bordered w-full"
            />
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              disabled
            />
            <input
              defaultValue={orderInfo?.resellPrice}
              name="resellPrice"
              type="text"
              disabled
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input input-bordered w-full"
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
