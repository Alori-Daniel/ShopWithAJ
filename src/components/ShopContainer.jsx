import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Spin } from "antd";


const ShopContainer = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsloading] = useState(false)

    const fetchData = async () => {
        try {
            setIsloading(true)
            const response = await axios.get('https://fakestoreapi.com/products');
            // console.log(response);
            setProducts(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsloading(false)
        }
    }

    const fetchCategoryData = async (category) => {
        try {
            setIsloading(true)
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            console.log("categor", response);
            setProducts(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsloading(false)
        }
    }

    useEffect(() => {
        fetchData()

        return () => {

        }
    }, [])







    return (
        <div className='w-[1024px] border-2 mt-36 flex flex-col '>
            <div className='flex justify-center my-9'>
                <h1>Fashion</h1>
            </div>
            <div className='flex'>
                <div className='w-[20%]'>
                    <h1>Filters</h1>
                    <p>By Categories</p>
                    <p onClick={() => { fetchCategoryData("men's clothing") }}>Mens Clothing</p>
                    <p onClick={() => { fetchCategoryData("jewelery") }}>Jewelery</p>
                    <p onClick={() => { fetchCategoryData("electronics") }}>electronics</p>
                </div>
                {/* <div className='w-[80%] grid grid-cols-3 border-2 gap-4 border-amber-600'> */}
                {isLoading ?
                    (
                        <div className='w-[80%] flex justify-center items-center border-2 gap-4 border-amber-600'>
                            <Spin size="large" />
                        </div>
                    ) :
                    (
                        <div className='w-[80%] grid grid-cols-3 border-2 gap-4 border-amber-600'>
                            {products.map((product) => {
                                return (
                                    <div key={product.id} className='border-2 w-[250px] h-[400px] cursor-pointer flex flex-col gap-1'>

                                        <Link to={`/products/${product.id}`}><motion.img whileTap={{ scale: 0.9 }} src={product.image} className='w-full h-[250px] object-cover rounded-2xl border-2' alt="" /></Link>
                                        <p className='font-volkov'>{product.title}</p>
                                        <p className='border-2 w-fit bg-blue-600 text-white rounded-sm p-1'>{product.category}</p>
                                        <p>${product.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )}


                {/* </div> */}
            </div>

        </div>
    )
}

export default ShopContainer
