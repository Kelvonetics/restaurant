import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { RiAddLine, RiDeleteBin3Line, RiPencilLine, RiSettings2Line, RiStarFill } from '@remixicon/react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import CreateCategoryModal from '../components/modals/categories/CreateCategoryModal'


const Profile = () => {

    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    const params = useParams();
    const navigate = useNavigate();

    const [showCreateModal, setShowCreateModal] = useState(false);

    const URL = import.meta.env.VITE_BASE_URL;
    const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
    const { data: categories, mutate, error, isLoading } = useSWR(`${URL}/categories`, fetcher);  

    // console.log("Foods : " + foods?.data);



    // useEffect(() => {
    //     if(user?.role !== 'admin'){
    //         return navigate(`/access-denied`); 
    //     }       
    // }, [user]);



    return (
        <section className='bg-accent-secondary p-3 !overflow-visible'>
            <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center gap-1'>
               <span className='capitalize'> Your Profile </span> 
               <div className='border-t-[3px] border-orange-400 w-[12rem]'></div>
            </div>
    

            
        </section>
      )
}

export default Profile
