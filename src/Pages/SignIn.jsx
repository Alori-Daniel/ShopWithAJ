import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import welcomeImg from '../assets/welcomeImage.png'
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import CustomButtom from '../components/CustomButtom';
import { auth } from '../firebase';
import { provider } from '../firebase';
import { login } from '../redux/reducers/user';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { signInUser } from '../firebase';
import { signInWithPopUp } from '../firebase';




const SignIn = () => {
    const user = useSelector((state) => state.user.value)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formDetails = {
        email,
        password
    }

    const handleGoogleAuth = async () => {
        try {
            const user = await signInWithPopUp(auth, provider)
            console.log("this is user", user);
            console.log(user.displayName, user.email);
            const data = {
                email: user.email,
                username: user.displayName,
                photoUrl: user.photoURL
            }
            dispatch(login(data))

            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignIn = async () => {
        try {
            const result = await signInUser(auth, formDetails.email, formDetails.password)
            console.log(result);
            const data = {
                email: result.email,
                username: result.displayName,


            }
            console.log("This is the data passed", data);
            dispatch(login(data))

            console.log("This is the user", user.email);
            navigate("/")
        } catch (error) {
            console.log(error);
        } finally {
            console.log("done");
        }
        console.log(formDetails);
    }
    return (
        <div className='w-full h-[100vh] bg-[#ffffff]  p-6 flex flex-col items-center justify-center'>
            {/* <div className='bg-white flex flex-col items-center border-2 w-[1300px] p-4 justify-center'> */}
            <div className='h-full bg-white w-[1200px] flex'>
                <div className='w-[50%]  '>
                    <img src={welcomeImg} className='h-full w-full' alt="" />
                </div>

                {/*SIGN IN FORM*/}

                <div className='w-1/2  flex justify-center items-center border-2 border-[#DBDBDB]'>
                    <div className='w-[80%] h-[600px] flex flex-col items-center' >
                        <div className=' w-[90%]  min-h-full flex flex-col gap-2'>
                            <h1 className='text-[50px] self-start font-normal font-volkov mb-6 text-[#484848]'>SHOPAJ</h1>
                            <h3 className='text-[17px] self-start font-bold font-volkov mb-3'>Sign In To SHOPAJ</h3>
                            <div className='flex gap-3 mb-7 '>
                                <Button variant="outlined" className='' style={{ textTransform: 'none', fontSize: "14px", color: "black" }} onClick={handleGoogleAuth}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google" className='mx-2'>
                                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                                        <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                                    </svg>
                                    Sign Up with Google
                                </Button>
                                <Button variant="outlined" style={{ textTransform: 'none', fontSize: "14px", color: "black", }} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" id="facebook" className='mx-2'>
                                        <g id="Icons" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                            <g id="Color-" fill="#4460A0" transform="translate(-200 -160)">
                                                <path id="Facebook" d="M225.638 208H202.65a2.65 2.65 0 0 1-2.649-2.65v-42.7a2.649 2.649 0 0 1 2.65-2.65h42.701a2.649 2.649 0 0 1 2.649 2.65v42.7a2.65 2.65 0 0 1-2.649 2.65h-12.232v-18.588h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002v-6.479c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V208z"></path>
                                            </g>
                                        </g>
                                    </svg>

                                    Sign Up with Facebook
                                </Button>
                            </div>
                            <div className='flex justify-center items-center text-[#838383] text-[30px] mt-4'>
                                <RemoveIcon style={{ fontSize: "40px" }} />
                                <span className='font-poppins font-bold'>OR</span>
                                <RemoveIcon style={{ fontSize: "40px" }} />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <CustomButtom title="Sign In" handlePress={handleSignIn} containerStyles="bg-black text-white w-[90%] shadow-2xl py-3 rounded-[8px] self-center mt-2" textStyles=" text-sm text-center font-poppins " />
                                <CustomButtom title="Register Now" handlePress={() => navigate("/SignUp")} containerStyles="bg-white text-[#5B86E5] w-[90%] shadow-2xl py-3 rounded-[8px] border-2 border-[#5B86E5] self-center" textStyles=" text-sm text-center font-poppins " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default SignIn
