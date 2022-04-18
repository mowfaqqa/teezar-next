import React, { ReactElement } from 'react'
import Applayout from '../../components/Applayout';

const Products = () => {
  return (
    <div>Products</div>
  )
}

export default Products
Products.getLayout = function getLayout(page: ReactElement) {
    return <Applayout>{page}</Applayout>;
  };