import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from "./redux/store"
import { AnimatePresence } from 'framer-motion'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import { getCurrentUser } from './firebase'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './redux/reducers/user'
import ShopPage from './Pages/ShopPage'
import CartPage from './Pages/CartPage'


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    const checkUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = { email: user.email, username: user.displayName, photoUrl: user.photoURL };
        dispatch(login(userData)); // Dispatch user data to Redux store
      } else {
        dispatch(logout()); // Dispatch logout if no user is signed in
      }
    });

    return () => checkUser();
  }, [dispatch])
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/signIn",
      element: <SignIn />
    },
    {
      path: "/signUp",
      element: <SignUp />
    },
    {
      path: "/shop",
      element: <ShopPage />
    },
    {
      path: "/products/:productId",
      element: <ProductPage />
    },
    {
      path: "/cart",
      element: <CartPage />
    }
  ])
  return (
    <AnimatePresence exitBeforeEnter>
      <RouterProvider router={routes} />
      {/* <HomePage />
      <ProductPage /> */}
    </AnimatePresence>
  )
}

export default App
