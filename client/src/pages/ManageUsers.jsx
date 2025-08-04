import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { RiAddLine, RiDeleteBin3Line, RiPencilLine, RiSettings2Line, RiStarFill } from '@remixicon/react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import CreateCategoryModal from '../components/modals/categories/CreateCategoryModal'
import placeholder from '../assets/placeholder.jpg'
import { resolveDate } from '../lib'
import ModifyUserModal from '../components/modals/users/ModifyUserModal'


const ManageUsers = () => {

    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    const params = useParams();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState('');

    const URL = import.meta.env.VITE_BASE_URL;
    const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
    const { data: users, mutate, error, isLoading } = useSWR(`${URL}/auth/users`, fetcher);  

    // console.log("Foods : " + foods?.data);



    useEffect(() => {
        if(user?.role !== 'admin'){
            return navigate(`/access-denied`); 
        }       
    }, [user]);



    return (
        <section className='bg-accent-secondary p-3 !overflow-visible'>
            <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center gap-1'>
               <span className='capitalize'> Manage Users </span> 
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
                            </th><th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Email</p>
                            </th><th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Phone</p>
                            </th><th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Role</p>
                            </th><th className="px-6 py-2 text-[0.8rem] text-left font-light cursor-pointer">
                                <p>Created on</p>
                            </th>
                            <th className="px-6 py-2 text-[0.8rem] text-right font-light flex justify-end"> 
                                <RiSettings2Line onClick={() => setShowCreateModal(true)} className='cursor-pointer' /> 
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            users?.data?.length &&
                            users?.data?.map((user, index) => (
                                <tr className={`whitespace-nowrap ${index % 2 !== 0 ?
                                    'bg-gray-200 transition-all ease-in-out duration-500' : null}`} key={user?._id}>
                                    <td className="px-6 py-2 text-sm">  
                                        <img src={user?.imgUrl || placeholder} alt={user?.name} className='w-9 h-9 rounded-full' />
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[0.9rem] "> {user?.name} </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[0.9rem] "> {user?.email} </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[0.9rem] "> {user?.phone} </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className={`text-[0.9rem] text-center py-[0.1rem] rounded-lg ${user?.role === 'admin' ? 'bg-emerald-200 text-emerald-700' : 'bg-blue-200 text-blue-800'}`}> 
                                            {user?.role} 
                                        </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[0.9rem]"> { resolveDate(user?.createdAt, 'year') } </div>
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className="text-[0.9rem] flex justify-end items-center gap-2">
                                            
                                            <RiPencilLine onMouseOver={() => setUserInfo(user)} onClick={() => setShowModal(true)} className='w-5 h-5 cursor-pointer' />
                                            
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
                <ModifyUserModal user={user} userInfo={userInfo} mutate={mutate} URL={URL} showModal={showModal} closeModal={() => setShowModal(false)} />
            </div>
            {/* MODALS */}
            
        </section>
      )
}

export default ManageUsers
