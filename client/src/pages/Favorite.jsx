import { NavLink, useParams } from 'react-router-dom'
import { RiStarFill } from '@remixicon/react'
import { useEffect, useState } from 'react'
import {resolveRatings} from '../lib/index'
import useSWR from 'swr'


const Favorite = () => {

    const params = useParams();
    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);

    const URL = import.meta.env.VITE_BASE_URL;

    const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
    const { data: foods, mutate, error, isLoading } = useSWR(`${URL}/foods/favorites/${user?._id}`, fetcher); 

    console.log("Foods : " + foods?.data?.favorites);




    return (
        <section className='bg-accent-secondary p-3'>
            <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center items-center gap-1'>
               <span className='capitalize'> {user?.name} Favorite Foods </span> 
               <div className='border-t-[3px] border-orange-400 w-[12rem]'></div>
            </div>
    
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 px-4">
                
                {
                    foods && foods?.data?.favorites.map((item) => (
                        <div key={item?._id} className="grid-item">
                            <NavLink to={`/category/foods/${item?.category[0]?._id}/${item?._id}`} >
                                <img src={item?.imgUrl} alt={item?.name} />
                            </NavLink>


                            <div className="item-desc">
                                <span> {item?.name} </span>

                                <div className="flex">
                                    {
                                        item?.ratings && resolveRatings(item?.ratings).map((rating) => (
                                            <RiStarFill key={rating} size={13} className='text-accent' />
                                        ) )
                                    }
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
                
            </div>
        </section>
      )
}

export default Favorite
