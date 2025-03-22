import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Button } from 'antd'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartContainer = () => {
    const carts = useSelector((state) => state.cart.items)
    return (
        <div className='w-[1024px]  border-2 mt-36 flex flex-col items-center' >
            <h2 className='font-volkov text-[42px]'>Shopping Cart</h2>
            <div className='w-full border-2'>
                <table className="min-w-full border-collapse border border-gray-300" >
                    <thead>
                        <tr className="h-[90px] border-b-2 border-gray-300">
                            {/* <th className="text-left p-2">ID</th> */}
                            <th className="text-left p-2">Product</th>
                            <th className="text-left p-2">Price</th>
                            <th className="text-left p-2">Quantity</th>
                            <th className="text-right p-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((item) => (
                            <tr key={item.id} className='border-b border-gray-400'>
                                {/* <td className="p-2 text-center">{item.id}</td> */}
                                <td className="p-2 w-[400px]">
                                    <div className='flex gap-3 '>
                                        <img src={item.image} alt={item.title} className='h-[100px]' style={{ width: '100px' }} />
                                        <div className='max-w-[250px] flex flex-col gap-2'>
                                            <p className='font-volkov text-sm'>{item.title}</p>
                                            <p className='font-poppins text-xs'>category: {item.category}</p>
                                        </div>
                                    </div>

                                </td>
                                <td className=" font-bold p-2 align-text-top">${item.price}</td>
                                <div className='flex'>
                                    <motion.div whileTap={{ scale: 0.9 }}><Button variant="outlined" color='white' className='custom-button' ><RemoveIcon fontSize='25px' /></Button></motion.div>
                                    <input type="text" className='w-[50px] text-center' value={item.count} />
                                    <motion.div whileTap={{ scale: 0.9 }}><Button variant="outlined" color='white' ><AddIcon fontSize='25px' /></Button></motion.div>
                                </div>
                                <td className=" p-2 text-right font-bold font-volkov align-text-top">${item.price * item.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartContainer
