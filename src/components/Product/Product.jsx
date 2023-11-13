import React from "react";

const Product = ({ product }) => {
  const { name, price, photo } = product;
  return (
    <div>
      <img src={photo} className="rounded-xl" />
      <h2 className="font-montserrat text-[21px]">{name}</h2>
      <p className="font-zapfhumanst text-[23px]">{price}</p>
    </div>
  );
};
export default Product;
