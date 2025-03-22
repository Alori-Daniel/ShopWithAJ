import React from 'react'
import ShopHeader from '../components/ShopHeader'
import CartContainer from '../components/CartContainer'

const CartPage = () => {
    return (
        <div className='w-full h-full bg-[#ffffff] flex flex-col items-center'>
            <ShopHeader />
            <CartContainer />
        </div>
    )
}

export default CartPage
