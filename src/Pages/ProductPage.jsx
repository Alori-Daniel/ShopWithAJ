import React from 'react'
import { useSelector } from 'react-redux'
import ShopHeader from '../components/ShopHeader'
import Product from '../components/Product'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    // const user = useSelector((state) => state.users.value)
    const params = useParams()
    // console.log(params);
    return (
        <div className='w-full h-full bg-[#ffffff] flex flex-col items-center'>
            <ShopHeader />
            <Product id={params.productId} />
        </div>
    )
}

export default ProductPage
