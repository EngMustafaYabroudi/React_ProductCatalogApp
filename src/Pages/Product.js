import React, {useState} from "react";

const Product = ({ id,name, price, image, description }) => {
  const [productId, setProductId] = useState(null);

  const handleClick = (e) => {
    setProductId(null);
    console.log(id);
  };

  return (
    <div key={id} className="product">
      <h3>{name}</h3>
      <p>${price}</p>
      <img src={image} alt={name} />
      <p>{description}</p>
      <button onClick={handleClick}>Show Details</button>
    </div>
  );
};

export default Product;