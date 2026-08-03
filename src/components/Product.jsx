import React from "react";

function Product({ product, isDescription }) {
  const { title, images, description, price } = product;
  return (
    <div className="product-card">
      <img className="product-image" src={images[0]} alt={title} />
      <h3 className="product-title">{title.slice(0, 25)}</h3>
      {isDescription && <p className="product-description">{description}</p>}
      <p className="product-price">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </p>
      <button className="btn btn-details">Details</button>
    </div>
  );
}

export default Product;
