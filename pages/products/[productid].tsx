import React, { ReactElement } from 'react'
import Applayout from '../../components/Applayout';
import Footer from '../../components/Footer';
import Navbar2 from '../../components/Navbar';
import productData from '../../components/productData';

const Product = () => {
  const { id } = useParams()
  const { img, product_name, price, desc, category } = productData.find((p) => p.id === id)
  return (
    <>
    <Navbar2 />
    <div className="grid grid-cols-1 md:grid-cols-3  p-4">
       <div className="col-span-2">
          <img src={img} alt="product" className="w-5/6 mx-auto"/>
       </div>
       <div className="col-span-1 md:border-l md:border-solid md:border-gray-400 py-3">
          <h2 className="text-3xl md:text-5xl font-serif text-center">{product_name}</h2>
          <p className="text-gray-600 text-xl text-center mt-2">{price}</p>
          <p className="text-gray-600 text-base text-center m-2">{desc}</p>
          <div className="text-center mt-6 pt-4 mx-3 border-t border-dotted border-gray-300">
             <label htmlFor="color" className="text-xl">Color : </label>
             <select name="color" id="color" className="border-b border-solid border-gray-300 p-1 w-4/6 md:w-5/6 text-center text-xl text-gray-500">
                <option value="red">select an option</option>
                <option value="black">Black</option>
                <option value="orange">Blue</option>
                <option value="white">White</option>
                <option value="white">red</option>
             </select> <br />
             <label htmlFor="size" className="text-xl">Size : </label>
             <select name="size" id="size" className="border-b border-solid border-gray-300 p-1 w-4/6 md:w-5/6 text-center text-xl text-gray-500">
                <option value="4">select an option</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
             </select>
          </div>
          <p className="text-center my-4 font-serif">Category : {category}</p>
          <div className="mt-8 grid grid-cols-2">
             <div className="flex justify-center items-center">
                <button type="button" className="border px-3 py-1 border-solid border-gray-400 hover:border-gold-100">+</button>
                <p className="border px-5 py-1 border-solid border-gray-400">1</p>
                <button type="button" className="border px-3 py-1 border-solid border-gray-400 hover:border-gold-100">-</button>
             </div>
             <div className="text-center">
             <button type="button" className="border px-3 py-1 border-gold-100 bg-gold-100 text-white hover:bg-white hover:text-gold-100 hover:border hover:border-gold-100">Add Cart</button>
             </div>
          </div>
          
       </div>
    </div>
    <Footer />
 </>   )
}

export default Product

Product.getLayout = function getLayout(page: ReactElement) {
    return <Applayout>{page}</Applayout>;
  };

function useParams(): { id: any; } {
   throw new Error('Function not implemented.');
}
