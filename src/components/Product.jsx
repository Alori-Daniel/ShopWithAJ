import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "antd";
import { motion } from 'framer-motion'
import { addItem } from '../redux/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Product = ({ id }) => {
    // console.log("this", id);
    const cart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    const [product, setProduct] = useState({})
    const [count, setCount] = useState(1)
    const [cartDetails, setCartDetails] = useState([])
    const getProduct = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            // console.log(response);
            setProduct(response.data)
            // console.log("product", product);
        } catch (error) {
            console.log(error);
        }
    }
    const details = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        category: product.category,
        count: count
    }
    const productExistsInCart = cart.find((product) => product.id === details.id)

    // console.log("this is cart details", cartDetails);
    const reduceItems = () => {
        if (productExistsInCart) {
            dispatch(addItem({ ...productExistsInCart, count: productExistsInCart.count - 1 }))
            toast.success(`${product?.title.substring(0, 10)} item reduced`)
        }
    }
    const handleAddToCart = () => {

        // const nextId = cart.length ? cart[cart.length - 1].id + 1 : 1;
        // const newDetails = {
        //     ...details,
        //     id: nextId,
        // };

        // Create a new details object with the updated id
        if (productExistsInCart) {
            dispatch(addItem({ ...productExistsInCart, count: productExistsInCart.count + count }))
            toast.success(`${product?.title.substring(0, 10)} increased in To Cart`)
        }
        else {
            dispatch(addItem(details))
            toast.success(`${product?.title.substring(0, 10)} added To Cart`)
        }
        // try {
        //     setCartDetails((prev) => [...prev, newDetails])
        //     dispatch(addItem(newDetails))
        //     toast.success(`${product?.title.substring(0, 10)} added To Cart`)

        // } catch (error) {
        //     console.log(error);
        // } finally {

        // }
    }

    useEffect(() => {
        getProduct()

        return () => {

        }
    }, [])

    return (
        <div className='w-[1024px] border-2 mt-36 flex'>
            <div className='w-1/2 flex gap-1  '>
                <div className='flex flex-col justify-around min-w-[100px] h-[500px]'>
                    <img src={product.image} className='h-[100px] border-2' alt="" />
                    <img src={product.image} className='h-[100px] border-2' alt="" />
                    <img src={product.image} className='h-[100px] border-2' alt="" />
                    <img src={product.image} className='h-[100px] border-2' alt="" />
                </div>
                <img src={product.image} className='h-[500px] w-[400px]' alt="" />

            </div>
            <div className='w-1/2 border-2 p-2 flex flex-col gap-2'>
                <h3 className='font-volkov text-lg'>SHOPAJ</h3>
                <p className='font-volkov text-[30px] font-normal'>{product.title}</p>
                <p className='border-2 w-fit bg-blue-600 text-white rounded-sm p-1'>{product.category}</p>
                <p className='font-volkov text-lg'>${product.price}.00</p>
                <p className='text-sm font-poppins'>{product.description}</p>
                <div className='flex flex-col gap-1'>
                    <p>Quantity</p>
                    <div className='flex gap-2'>
                        <div className='flex'>
                            <motion.div whileTap={{ scale: count <= 1 ? 1 : 0.9 }}><Button variant="outlined" color='white' className='custom-button' onClick={() => setCount(prev => prev - 1)} disabled={count <= 1}><RemoveIcon fontSize='25px' /></Button></motion.div>
                            <input type="text" className='w-[50px] text-center' value={count} onChange={(e) => { if (e.target.value >= 0) setCount(e.target.value) }} />
                            <motion.div whileTap={{ scale: 0.9 }}><Button variant="outlined" color='white' onClick={() => setCount(prev => prev + 1)}><AddIcon fontSize='25px' /></Button></motion.div>
                        </div>
                        <Button variant="outlined" className='' onClick={handleAddToCart} style={{ textTransform: 'none', fontSize: "14px", color: "black", width: "150px" }}> Add to Cart</Button>
                    </div>
                </div>


            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Zoom}
            />
        </div >
    )
}

export default Product
