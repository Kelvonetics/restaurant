import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { RiAddLine, RiArrowLeftLine, RiDeleteBin3Line, RiHome3Line, RiPencilLine, RiSettings2Line, RiShieldLine, RiStarFill } from '@remixicon/react'
import { useEffect, useState } from 'react'


const AccessDenied = () => {

    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    const navigate = useNavigate();

    const URL = import.meta.env.VITE_BASE_URL;



    return (
        <section className='bg-gray-800 p-3 h-screen flex justify-center items-center'>
            <div className='text-2xl font-normal tracking-wider flex justify-center items-center gap-2'>
                <div className='capitalize flex flex-col justify-center items-center gap-3 w-full'> 
                    <RiShieldLine className='w-20 h-20 text-pink-900' /> 
                    <p className='text-gray-500'>Access Denied </p>

                    <hr />

                    <div className="flex items-center gap-4 text-gray-500 text-lg hover:text-gray-400">
                        <RiArrowLeftLine className='' />
                        <NavLink to={`/home`} className='' > Back to home</NavLink>
                    </div>
                    
                </div> 
            </div>
        </section>
      )
}

export default AccessDenied
