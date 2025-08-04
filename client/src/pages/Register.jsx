import { RiLock2Line, RiMailLine, RiPhoneLine, RiUser3Line } from '@remixicon/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import placeholder from '../assets/placeholder.jpg'
import { registerSchema } from '../schemas';
import bgImage from '../assets/food-placeholder-4.jpg'
import logo from '../assets/logo1.jpeg'


const Register = () => {

  const navigate = useNavigate();
  const URL = import.meta.env.VITE_BASE_URL;
  


    const onSubmit = async(values, actions) => {
        let answer;
        answer = window.confirm('Are you sure you want to signup ?');
        if (answer) 
        {
            try {
                const response = await fetch(`${URL}/auth/register`, {
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify(values),
                });
                const res = await response.json();
                if(res.success){
                    toast.success(res?.message);
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                    actions.resetForm();
                    return navigate(`/`);
                }
                else{
                    toast.error(res.message);
                }
            } catch (error) {
                // toast.error("Error occurred while signing up : ", error.message);
                console.log("Error occurred while signing up : ", error.message);
            }
        }
    }



    const { values, touched, isSubmitting , errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { 
        name: '',  
        email: '',
        password: '',
        phone: '',
        photo: placeholder,
    },
    validationSchema: registerSchema,
    onSubmit,
    })






  return (
    <div className="w-full bg-cover bg-center bg-black/40" style={{ backgroundImage: `url(${bgImage})` }}>
        <main className='bg-accent/35 p-3 h-screen flex items-center w-full' >
                <form className="login-form  !h-[90%] sm:!h-[90%] md:!h-[90%] lg:!h-[60%]" onSubmit={handleSubmit}> 

                    <div className='text-2xl font-normal tracking-wider mb-1 flex flex-col items-center gap-1 gap-y-0.5'>
                        <span className='capitalize flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-6 h-6' />
                            <span>Sign Up</span>
                        </span>
                        <div className='border-t-[3px] border-orange-400 w-[7.5rem]' />
                    </div>`

                    <div className="input-wrapper w-full px-3 sm:px-3 md:px-8 lg:px-8">
                        <div className="input-div">
                            <label htmlFor="name" className="label">
                                <RiUser3Line size={15} />
                                <span>Name</span>
                                {touched.name && errors.name ? <p className='form-error'>{errors.name}</p> : null} 
                            </label>
                            <input type="text" id="name" name="name" placeholder='Name' className='input-field'
                            value={values?.name} onChange={handleChange} onBlur={handleBlur}/>
                        </div>

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


                    <div className="input-wrapper w-full !px-6 sm:px-3 md:px-8 lg:px-8">
                        <div className="input-div">
                            <label htmlFor="password" className="label">
                                <RiLock2Line size={15} />
                                <span>Password</span>
                                {touched.password && errors.password ? <p className="form-error">{errors.password}</p> : null} 
                            </label>
                            <input type="password" id="password" name="password" placeholder='password' className='input-field'
                            value={values?.password} onChange={handleChange} onBlur={handleBlur} />
                        </div>

                        <div className="input-div">
                            <label htmlFor="phone" className="label">
                                <RiPhoneLine size={15} />
                                <span>Phone</span>
                                {touched.phone && errors.phone ? <p className="form-error">{errors.phone}</p> : null} 
                            </label>
                            <input type="text" id="phone" name="phone" placeholder='Phone' className='input-field'
                            value={values?.phone} onChange={handleChange} onBlur={handleBlur}/>
                        </div>
                    </div>


                    <div className="flex justify-between w-full !px-6 sm:px-3 md:px-8 lg:px-8 mb-6">               
                        <button type='submit' className={`btn-create !w-fit ${isSubmitting ? 'disabled:opacity-60 disabled:cursor-not-allowed' : ''}`} disabled={isSubmitting} >
                            <span className="flex items-center gap-2"> 
                                <span> {isSubmitting ? 'Signing up ...'  : 'Register' }  </span>  
                            </span> 
                        </button>
                        
                        <NavLink to={`/`} className='btn-register !w-fit'>Login</NavLink>
                    </div>
                        
                </form>
            </main>
    </div>
    
  )
}

export default Register