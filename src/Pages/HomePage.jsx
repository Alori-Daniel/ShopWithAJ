import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/reducers/user'
import HomeHeader from '../components/HomeHeader'
import HomeHero from '../components/HomeHero'
import Deals from '../components/Deals'

const HomePage = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.user.value)

    const details = { name: name, age: age }

    const handleSubmit = () => {
        dispatch(login(details))

    }
    return (
        <div className='w-full h-full bg-[#ffffff] flex flex-col items-center'>
            <HomeHeader />
            <HomeHero />
            <Deals />

            <div>
                <h1>Hello</h1>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>

        </div>
    )
}

export default HomePage
