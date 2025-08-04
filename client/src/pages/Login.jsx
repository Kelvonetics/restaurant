import { RiLock2Line, RiMailLine } from '@remixicon/react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo1.jpeg'
import toast from 'react-hot-toast'
import { loginSchema } from '../schemas/index.js'
import { useFormik } from "formik";
import bgImage from '../assets/food-placeholder-4.jpg'

const Login = props => {

    const URL = import.meta.env.VITE_BASE_URL;
    
    const navigate = useNavigate();
    

    const onSubmit = async(values, actions) => {
        let res;   //console.log("Login : ", values)
        try {
            const response = await fetch(`${URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values), 
            });
            res = await response.json();
            if(!res.success){
                return toast.error(res.message);
            }
            localStorage.setItem('userData', JSON.stringify(res.user));
            toast.success(res.message);
            await new Promise((resolve) => {
                setTimeout(resolve, 3000);
            });

            actions.resetForm();
            return navigate('/home');
            
        } catch (error) {
            toast.error("Error occurred while login : ", error.message);
            console.log("Error occurred while login : ", error.message);
        }
    }


    const { values, touched, isSubmitting, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit,
    })
  
  






  return (
      <div className="w-full bg-cover bg-center bg-black/40" style={{ backgroundImage: `url(${bgImage})` }}>
        <main className='bg-accent/35 p-3 h-screen flex items-center'>
            <form className="login-form" onSubmit={handleSubmit}> 

                <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col items-center gap-1'>
                    <span className='capitalize flex items-center gap-2'>
                        <img src={logo} alt="logo" className='w-6 h-6' />
                        <span>Login</span>
                    </span>
                    <div className='border-t-[3px] border-orange-400 w-[6rem]' />
                </div>

                <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-6">
                    <div className="input-div">
                        <label htmlFor="email" className="label">
                            <RiMailLine size={15} />
                            <span>Email</span>
                            {touched.email && errors.email ? <p className='form-error'>{errors.email}</p> : null} 
                        </label>
                        <input type="text" id="email" name="email" placeholder='Email' className='input-field'
                        value={values?.email} onChange={handleChange} onBlur={handleBlur}/>
                    </div>
                </div>

                <div className="w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-6">
                    <div className="input-div">
                        <label htmlFor="password" className="label">
                            <RiLock2Line size={15} />
                            <span>Password</span>
                            {touched.password && errors.password ? <p className="form-error">{errors.password}</p> : null} 
                        </label>
                        <input type="password" id="password" name="password" placeholder='password' className='input-field'
                        value={values?.password} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                </div>

                <div className="flex justify-between w-full px-3 sm:px-3 md:px-8 lg:px-8 mb-6">               
                    <button type='submit' className={`btn-create !w-fit ${isSubmitting ? 'disabled:opacity-60 disabled:cursor-not-allowed' : ''}`} disabled={isSubmitting} >
                        <span className="flex items-center gap-2"> 
                            <span> {isSubmitting ? 'Signing in ...'  : 'Sign in' }  </span>  
                        </span> 
                    </button>
                    
                    <NavLink to={`/register`} className='btn-register !w-fit'>Sign up</NavLink>
                </div>
                    
            </form>
        </main>
      </div>
    
  )
}

Login.propTypes = {}

export default Login