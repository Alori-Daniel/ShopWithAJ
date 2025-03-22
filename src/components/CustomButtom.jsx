import React from 'react'

const CustomButtom = ({ title, containerStyles, textStyles, handlePress }) => {
    return (
        <button className={` flex justify-center items-center cursor-pointer ${containerStyles} transition-all duration-300 ease-in-out 
                hover:bg-opacity-80
                active:scale-95`} onClick={handlePress}>
            <p className={`${textStyles} transition-all duration-300 ease-in-out`}>
                {title}
            </p>
        </button>
    )
}

export default CustomButtom
