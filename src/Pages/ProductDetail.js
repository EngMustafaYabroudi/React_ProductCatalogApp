import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card} from "@material-ui/core";
import {useParams} from "react-router-dom";
import '@emotion/react';


const ProductDetailPage = () => {
  const {id} = useParams();
  
  const [product, setProduct] = useState(null);
  useEffect(() => {
    console.log(id);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Card>
        <img src={product.image} />
        <h1>
          <h1>{product.name}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </h1>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
