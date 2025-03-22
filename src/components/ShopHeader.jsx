import React, { useEffect, useState } from 'react'
import CustomButtom from './CustomButtom'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/reducers/user'
import { signOutUser } from '../firebase'
import { auth } from '../firebase'
import { motion } from 'framer-motion'
import avatar from '../assets/user.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const ShopHeader = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isMenu, setIsMenu] = useState(false)
    const user = useSelector((state) => state.user.value)
    const cart = useSelector((state) => state.cart.items)

    const handleSignOut = () => {
        signOutUser(auth)
    }

    // useEffect(() => {
    //     console.log("This is Cart", cart.length);
    //     console.log("This is Cart", cart);

    // }, [cart])

    return (
        <div className='w-full flex justify-center fixed z-50 bg-[#ffffff] shadow-2xl' >
            <div className='h-24 bg-[#ffffff]  w-[1024px] max-lg:w-screen px-2 flex items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className=''>
                        <h1 className='text-3xl font-volkov'>ShopAJ</h1>
                    </div>
                    <div className='flex justify-between max-md:hidden gap-10 items-center'>
                        <motion.ul initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} className='flex gap-10 max-lg:gap-5 font-poppins'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Packages</a></li>
                            <li><a href="">About</a></li>
                        </motion.ul>

                    </div>
                    {user ? (
                        <div className='flex flex-col items-center justify-center relative '>
                            <div className='flex items-center gap-2'>
                                <div className='relative cursor-pointer' onClick={() => navigate("/cart")} >
                                    <ShoppingCartOutlinedIcon />
                                    <div className='bg-gray-400 rounded-full h-3.5 text-[13px] w-3.5 flex items-center justify-center absolute top-0 right-0'>
                                        {cart.length}
                                    </div>
                                </div>
                                <motion.img src={user?.photoUrl == null ? avatar : user.photoUrl} whileTap={{ scale: 0.5 }} onClick={() => setIsMenu(prev => !prev)} className='h-7 w-7 rounded-full cursor-pointer' alt="" />
                                {/* <p className='text-sm'>{user?.username}</p> */}
                            </div>
                            {isMenu && (
                                <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='absolute top-[100%] right-0 bg-[#E0E0E0] shadow-xl rounded-lg  p-2'>

                                    <CustomButtom
                                        handlePress={handleSignOut}
                                        title="Sign Out"
                                        containerStyles="bg-black text-white w-14 py-2 rounded-[8px]"
                                        textStyles="text-[11px] text-center font-poppins" />
                                </motion.div>
                            )}

                        </div>
                    ) : (
                        <div className='flex flex-col items-center justify-center relative'>
                            <div className='flex items-center gap-2'>
                                <div className='relative cursor-pointer' onClick={() => navigate("/cart")}>
                                    <ShoppingCartOutlinedIcon />
                                    <div className='bg-gray-400 rounded-full h-3.5 text-[13px] w-3.5 flex items-center justify-center absolute top-0 right-0'>
                                        {cart.length}
                                    </div>
                                </div>
                                <motion.img src={user?.photoUrl == null ? avatar : user.photoUrl} whileTap={{ scale: 0.8 }} onClick={() => setIsMenu(prev => !prev)} className='h-7 w-7 rounded-full cursor-pointer' alt="" />
                                {/* <p className='text-sm'>{user?.username}</p> */}
                            </div>
                            {isMenu && (
                                <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='absolute top-[100%] w-28 right-0 bg-[#E0E0E0] shadow-xl rounded-lg p-2'>
                                    <motion.ul initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} className='hidden max-md:flex flex-col gap-2  font-poppins'>
                                        <li><a href="#home-hero">Home</a></li>
                                        <li><a href="#deals">Deals</a></li>
                                        <li><a href="">New Arrivals</a></li>
                                        <li><a href="">Packages</a></li>
                                        <li><a href="">About</a></li>

                                    </motion.ul>
                                    <Link to="/signIn">
                                        <CustomButtom
                                            title="Sign In"
                                            containerStyles="bg-black text-white w-14 py-2 rounded-[8px]"
                                            textStyles="text-[11px] text-center font-poppins"
                                        />
                                    </Link>

                                </motion.div>
                            )}
                        </div>


                    )}
                </div>

            </div>
        </div>
    )
}

export default ShopHeader
