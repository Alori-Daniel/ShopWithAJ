import React from 'react'
import heroImage1 from '../assets/heroImage1.png'
import heroImage2 from '../assets/heroImage2.png'
import heroImage3 from '../assets/heroImage3.png'
import heroImage4 from '../assets/heroImage4.png'
import calvin from '../assets/logos/calvin.png'
import chanel from '../assets/logos/chanel.png'
import denim from '../assets/logos/denim.png'
import louis from '../assets/logos/louis.png'
import prada from '../assets/logos/prada.png'
import CustomButtom from './CustomButtom'
import { useNavigate } from 'react-router-dom'


const HomeHero = () => {
    const navigate = useNavigate()
    return (
        <div id="home-hero" className='bg-[#ffffff] w-[1024px] max-lg:w-full mt-36 shadow-lg  shadow-[rgba(0,0,0,20)_0px_10px_10px]'>
            <div className='w-full flex items-center justify-between max-sm:flex-col transition-all duration-300 ease-in-out '>
                <div className='w-[31%] h-[580px] max-md:h-[380px] max-md:hidden max-sm:h-[280px] bg-[#E0E0E0] rounded-[7px] flex items-end justify-center'>
                    <img src={heroImage1} alt="" className=' h-[75%] w-[100%]' />
                </div>
                <div className='w-[31%] max-md:w-[95%] h-[580px]  max-md:h-full gap-4  flex flex-col justify-between '>
                    <div className='w-full h-[22%] max-md:h-[200px] bg-cover rounded-[7px] bg-center' style={{ backgroundImage: `url(${heroImage4})` }}>

                    </div>
                    <div className=' w-full h-[55%] max-md:h-[300px] flex flex-col items-center justify-center gap-3 max-md:gap-0 '>
                        <div className='max-w-[100%] flex flex-col justify-between'>
                            <div className=' max-h-full flex justify-center'>
                                <h1 className='font-poppins font-medium  text-[91px] max-lg:text-[65px] max-md:text-[91px] max-sm:text-[91px] scale-x-75 leading-[1] max-w-fit  text-[#484848]'>ULTIMATE</h1>
                            </div>
                            <div className=' max-h-full flex justify-center '>
                                <h1 className='font-poppins font-medium text-outline text-[140px] max-lg:text-[100px] max-md:text-[80px] max-sm:text-[80px] '>SALE</h1>
                            </div>
                        </div>
                        <p className='font-poppins font-normal text-lg text-[#484848] w-52 text-center max-sm:text-[15px]'>NEW COLLECTION</p>
                        <CustomButtom title="SHOP NOW" containerStyles="bg-black text-white max-md:w-full max-md:h-12  w-40 py-2 h-10 rounded-[8px]" handlePress={() => navigate("/shop")} textStyles=" text-sm max-sm:text-[10px] text-center font-poppins" />
                    </div>
                    <div className='w-full h-[22%] max-md:h-[200px] bg-cover rounded-[7px] bg-center' style={{ backgroundImage: `url(${heroImage3})` }}>

                    </div>
                </div>
                <div className='w-[31%] h-[580px] max-md:hidden max-md:h-[380px] max-sm:h-[280px] bg-[#E0E0E0] rounded-[7px] flex items-end justify-center'>
                    <img src={heroImage2} alt="" className='h-[75%] w-[80%]' />
                </div>
            </div>
            <div className='flex justify-around h-[200px] max-lg:h-[150px] max-sm:grid p-2  max-sm:grid-cols-3 items-center'>
                <img src={calvin} className='w-[127px] max-lg:w-[70px] max-md:h-[12px] h-[22px]' alt="" />
                <img src={chanel} className='w-[127px] max-lg:w-[70px]  max-md:h-[12px]h-[22px]' alt="" />
                <img src={denim} className='w-[127px] max-lg:w-[70px]  max-md:h-[12px] h-[22px]' alt="" />
                <img src={louis} className='w-[127px] max-lg:w-[70px] max-md:h-[12px] h-[22px]' alt="" />
                <img src={prada} className='w-[127px] max-lg:w-[70px] max-md:h-[12px] h-[22px]' alt="" />
            </div>
        </div>
    )
}

export default HomeHero
