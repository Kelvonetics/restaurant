import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { RiAddLine, RiDeleteBin3Line, RiPencilLine, RiSettings2Line, RiStarFill } from '@remixicon/react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import CreateRestaurantModal from '../components/modals/restaurants/CreateRestaurantModal'


const Restaurants = () => {

    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    const navigate = useNavigate();

    const [showCreateModal, setShowCreateModal] = useState(false);


    const URL = import.meta.env.VITE_BASE_URL;
    const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
    const { data: restaurants, mutate, error, isLoading } = useSWR(`${URL}/restaurants`, fetcher);  







    useEffect(() => {
        if(user?.role !== 'admin'){
            return navigate(`/access-denied`); 
        }       
    }, [user]);




    return (
        <section className='bg-accent-secondary p-3'>
            <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center gap-1'>
               <span className='capitalize'> Restaurants </span> 
               <div className='border-t-[3px] border-orange-400 w-[12rem]'></div>
            </div>
    

            {/* TABLES */}
            <div className="shadow-md pb-10 overflow-auto min-w-[220px]"  style={{ border: '0.05rem dotted #777' }}>
                <table className={` w-full rounded-lg `}>
                    <thead className={`uppercase tracking-wide bg-gray-300 transition-all ease-in-out duration-500`}>
                        <tr>
                            <th className="px-6 py-2 text-[0.8rem] text-left font-light"> # </th>
                            <th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Name</p>
                            </th>
                            <th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Address</p>
                            </th>
                            <th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Phone</p>
                            </th>
                            <th className="px-6 py-2 text-[0.8rem] text-right font-light flex justify-end"> 
                                <RiAddLine className='cursor-pointer' onClick={() => setShowCreateModal(true)} /> 
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            restaurants?.data?.length &&
                            restaurants?.data?.map((restaurant, index) => (
                                <tr className={`whitespace-nowrap ${index % 2 !== 0 ?
                                    'bg-gray-200 transition-all ease-in-out duration-500' : null}`} key={restaurant?._id}>
                                    <td className="px-6 py-2 text-sm">  {index + 1}  </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[1rem] "> {restaurant?.name} </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[1rem]">
                                            {restaurant?.address}
                                        </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[1rem]">
                                            {restaurant?.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[1rem] flex justify-end items-center gap-2">
                                            <NavLink to={`/restaurants/edit/${restaurant?._id}`}>
                                                <RiPencilLine className='w-5 h-5 cursor-pointer' />
                                            </NavLink>
                                            
                                            <NavLink to={`/restaurants/edit/${restaurant?._id}`}>
                                                <RiDeleteBin3Line className='w-5 h-5 text-red-500 cursor-pointer' />
                                            </NavLink>
                                                
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>


            {/* MODALS */}
            <div className='flex justify-center md:justify-end'>
                <CreateRestaurantModal URL={URL} showCreateModal={showCreateModal} closeModal={() => setShowCreateModal(false)} />
            </div>
            {/* MODALS */}
            
        </section>
      )
}

export default Restaurants
