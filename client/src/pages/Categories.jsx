import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { RiAddLine, RiDeleteBin3Line, RiPencilLine, RiSettings2Line, RiStarFill } from '@remixicon/react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import CreateCategoryModal from '../components/modals/categories/CreateCategoryModal'
import placeholder from '../assets/placeholder.jpg'


const Categories = () => {

    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    const params = useParams();
    const navigate = useNavigate();

    const [showCreateModal, setShowCreateModal] = useState(false);

    const URL = import.meta.env.VITE_BASE_URL;
    const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
    const { data: categories, mutate, error, isLoading } = useSWR(`${URL}/categories`, fetcher);  

    // console.log("Foods : " + foods?.data);



    useEffect(() => {
        if(user?.role !== 'admin'){
            return navigate(`/access-denied`); 
        }       
    }, [user]);






    return (
        <section className='bg-accent-secondary p-3 !overflow-visible'>
            <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center gap-1'>
               <span className='capitalize'> Categories </span> 
               <div className='border-t-[3px] border-orange-400 w-[12rem]'></div>
            </div>
    

            {/* TABLES */}
            <div className="shadow-md pb-10 overflow-auto min-w-[220px]"  style={{ border: '0.05rem dotted #777' }}>
                <table className={` w-full rounded-lg `}>
                    <thead className={`uppercase tracking-wide bg-gray-300 transition-all ease-in-out duration-500`}>
                        <tr>
                            <th className="px-6 py-2 text-[0.8rem] text-left font-light"> Photo </th>
                            <th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Name</p>
                            </th>
                            <th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Description</p>
                            </th>
                            <th className="px-6 py-2 text-[0.8rem] text-right font-light flex justify-end"> 
                                <RiAddLine onClick={() => setShowCreateModal(true)} className='cursor-pointer' /> 
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            categories?.data?.length &&
                            categories?.data?.map((category, index) => (
                                <tr className={`whitespace-nowrap ${index % 2 !== 0 ?
                                    'bg-gray-200 transition-all ease-in-out duration-500' : null}`} key={category?._id}>
                                    <td className="px-6 py-2 text-sm"> 
                                        <img src={category?.photo || placeholder} alt={user?.name} className='w-9 h-9 rounded-full' />
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[1rem] "> {category?.name} </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[1rem]">
                                            {category?.description}
                                        </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[1rem] flex justify-end items-center gap-2">
                                            <NavLink to={`/categories/edit/${category?._id}`}>
                                                <RiPencilLine className='w-5 h-5 cursor-pointer' />
                                            </NavLink>
                                            
                                            <NavLink to={`/categories/edit/${category?._id}`}>
                                                <RiDeleteBin3Line to={`/categories/edit/${category?._id}`} className='w-5 h-5 text-red-500 cursor-pointer' />
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
                <CreateCategoryModal URL={URL} placeholder={placeholder} showCreateModal={showCreateModal} closeModal={() => setShowCreateModal(false)} />
            </div>
            {/* MODALS */}
            
        </section>
      )
}

export default Categories
