import React, { ReactElement } from 'react'
import Applayout from '../../components/Applayout';

const Product = () => {
  return (
    <div>Products</div>
  )
}

export default Product

Product.getLayout = function getLayout(page: ReactElement) {
    return <Applayout>{page}</Applayout>;
  };