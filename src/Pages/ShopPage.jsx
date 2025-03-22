import React from 'react'
import ShopHeader from '../components/ShopHeader'
import ShopContainer from '../components/ShopContainer'

const ShopPage = () => {
    return (
        <div className='w-full h-full bg-[#ffffff] flex flex-col items-center'>
            <ShopHeader />
            <ShopContainer />
        </div>
    )
}

export default ShopPage
