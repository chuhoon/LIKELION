import React from 'react';
import ProductImage from '../productImage/ProductImage.jsx';
import ProductName from '../productName/ProductName.jsx';
import ProductPrice from '../productPrice/ProductPrice.jsx';
import './productCard.css';

export default function ProductCard({ productName, price, thumbnailImg }) {
  return (
    <>
      <ProductImage thumbnailImg={thumbnailImg} productName={productName} />
      <ProductName productName={productName} />
      <ProductPrice price={price} />
    </>
  );
}
