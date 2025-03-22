import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user'
import cartReducer from './reducers/cartReducer'


export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})

