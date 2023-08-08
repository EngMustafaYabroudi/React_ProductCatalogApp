import '@emotion/react';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Grid, List, Typography } from "@material-ui/core";
import styles from "../Style/ProductCatalogPage.css"
const ProductCatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const params = {page:{page}};
    axios.get("https://fakestoreapi.com/products",{params})
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [page]);


  return (
    <div>
      <h1>Product Catalog</h1>
      <Grid style={{ margin: "30px" }} container spacing={2} className='catalog-product'>
        {products.map((product) => (
          <List key={product.id} className='product-item'>
            <img src={product.image} className='image' />
            <Typography variant="subtitle1" className='price'>${product.price}</Typography>
            <Typography  className='name'>{product.name}</Typography>
            <Typography variant="body1" className='description'>{product.description}</Typography>
            <Link to={`/product-detail/${product.id}`}><Button className='button'> View Product </Button></Link>
          </List>
        ))}
      </Grid>    
      <Button style={{margin:"30px"}} onClick={() => page > 1 ? setPage(page - 1) : setPage(page)}>prev Page</Button>
      <Button style={{margin:"30px"}} onClick={() => setPage(page + 1)}>Next Page</Button>
    </div>
  );
};

export default ProductCatalogPage;