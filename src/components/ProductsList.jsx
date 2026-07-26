import React, { useEffect, useState } from "react";

function ProductsList() {
  const apiURL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="products-list">
      <div className="container">
        <h2>Our Products:</h2>
        <div className="products-wrapper">
          {products.map((products) => (
            <div className="product-card">
              <img
                className="product-image"
                src={products.images[0]}
                alt={products.id}
              />
              <h3 className="product-title">{products.title}</h3>
              <p className="product-description">{products.description}</p>
              <p className="product-price">{products.price}£</p>
              <button className="btn btn-details">Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
