import React, { useRef } from 'react'
import { Pagination, Navigation, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide1 from '../assets/slides/slide1.png'
import slide2 from '../assets/slides/slide2.png'
import CustomButtom from './CustomButtom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Deals = () => {
    // const swiper = useSwiper();
    const swiperRef = useRef(null);

    return (
        <div id="deals" className='w-full h-full  flex items-center  py-10 overflow-hidden'>
            <div className='h-full w-[1024px] flex max-w-full px-3 max-md:flex-col max-md:items-center mx-auto'>
                <div className='flex flex-col min-w-[400px] max-w-[400px] max-md:min-w-[300px]  gap-4  '>
                    <h1 className='text-[38px] font-volkov text-[#484848]'>Deals Of The Month</h1>
                    <p className='text-[15px] font-poppins font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                    <CustomButtom title="Buy Now" containerStyles=" shadow-2xl bg-black text-white w-40 py-2 h-10 rounded-[8px]" textStyles=" text-[13px] text-center font-normal font-poppins" />
                    <div className='h-[177px] w-full'>
                        <h2 className='font-poppins text-[25px] font-medium text-[#484848]'>Hurry, Before It’s Too Late!</h2>
                        <div className=''>
                            SHop
                        </div>
                    </div>
                </div>
                <div className='max-w-full h-[510px] max-md:h-[300px]  flex mb-1'>
                    <div className='flex gap-3 self-end max-lg:hidden '>
                        <div onClick={() => swiperRef.current.swiper.slidePrev()} className='h-[40px] w-[40px] bg-[#ffffff] cursor-pointer shadow-xl rounded-full items-center flex justify-center'>
                            <ArrowBackIosIcon style={{ height: "17px" }} />
                        </div>
                        <div onClick={() => swiperRef.current.swiper.slideNext()} className='h-[40px] w-[40px] bg-[#ffffff] cursor-pointer shadow-xl rounded-full items-center flex justify-center'>
                            <ArrowForwardIosIcon style={{ height: "17px" }} />
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        ref={swiperRef}
                        spaceBetween={20}
                        slidesPerView={3}
                        initialSlide={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        speed={2000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className=' h-[500px] max-md:h-[300px] w-full'
                    >
                        <SwiperSlide>
                            <img src={slide1} className=' ' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide2} className=' ' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide1} className=' ' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide2} className=' ' alt="" />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default Deals
