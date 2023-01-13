import React from "react";

const TopBanner = () => {
  return (
    <div
      className="hero h-96 rounded-lg"
      style={{ backgroundImage: `url("https://i.pinimg.com/1200x/8d/c0/02/8dc0022e2afb9aea63a1a267d826e86d.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome To <span className="text-orange-600">Laptop</span> Bazar</h1>
          <p className="mb-5">
          We are the largest retailer of pre-owned laptops. Our service is 100% guaranteed and backed by our 3 month hassle-free warranty.
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
