import { RiBowlLine, RiCake2Line, RiGlobeLine, RiGobletLine, RiLeafLine, RiLogoutCircleRLine, RiRestaurant2Line, RiRestaurantLine } from '@remixicon/react'
import logo from '../assets/logo.jpeg'
import { NavLink, useNavigate } from 'react-router-dom'
import useSWR from 'swr';
import placeholder from '../assets/placeholder.jpg'



const Sidebar = () => {
  const navigate = useNavigate();  

  const URL = import.meta.env.VITE_BASE_URL;
  const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
  const { data: categories, mutate, error, isLoading } = useSWR(`${URL}/categories`, fetcher); 









  return (
    <aside className='left-side'>
        <div className="flex flex-col text-center">
            <NavLink to={`/home`} className='flex justify-center items-center gap-3 text-2xl font-semibold max-md:hidden' >
                <img src={logo} alt="logo" className='h-8 object-contain' />
                <span className='text-accent'>Eatsy</span>
            </NavLink>
            

            <div className="side-menus">
                {
                    categories?.data && categories?.data?.map((category) => (
                        <NavLink to={`/category-page/${category?._id}`} key={category?._id} className={ ({isActive})  => {  
                            return isActive ? 'side-menu-active' : 'side-menu'; } }>
                            {/* <span><RiCake2Line className='text-orange-400 w-4 h-4' /></span> */}
                            <img src={category?.photo || placeholder} alt={category?.name} className='text-orange-400 w-4 h-4 rounded-full' />
                            <span>{category?.name}</span>
                        </NavLink>
                    ))
                }
            </div>



            {/* <div className="side-menus flex justify-around">
                <div className="side-menu" onClick={handleLogout}>
                    <span><RiLogoutCircleRLine className='text-orange-400' /></span>
                    <span >Logout</span>
                </div>
            </div> */}
        </div>
        
    </aside>
  )
}

export default Sidebar