import { NavLink } from 'react-router-dom'
import logo from '../assets/logo1.jpeg'
import { RiBowlLine, RiBuilding4Line, RiCake2Line, RiGlobeLine, RiGobletLine, RiGridLine, RiHeart2Line, RiHome2Line, RiLeafLine, RiLogoutCircleRLine, RiPhoneLine, RiRestaurant2Line, RiRestaurantLine, RiShoppingBag2Line, RiTeamLine, RiUser2Line, RiUser3Line } from '@remixicon/react'
import useSWR from 'swr';
import placeholder from '../assets/placeholder.jpg'



const Navbar = ({showMenu, setShowMenu, showUserMenu, setShowUserMenu}) => {
  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData);

  const URL = import.meta.env.VITE_BASE_URL;
  const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
  const { data: categories, mutate, error, isLoading } = useSWR(`${URL}/categories`, fetcher); 




    
    const handleLogout = async() => {
      let answer;
      answer = window.confirm('Are you sure you want to logout ?');
      if (answer) {
        const result = localStorage.removeItem('userData');
        toast.success("Logout, redirecting to login ... ");
        
        await new Promise((resolve) => setTimeout(resolve, 2500));
        return navigate(`/`); 
      }
    }






  return (
    <>
      <nav className='navbar'>
          <div className="nav-menu sm:block md:hidden lg:hidden flex items-center text-orange-400 cursor-pointer" 
            onClick={() => setShowMenu(!showMenu)}>
              <img src={logo} alt="" className='w-7 h-7 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-4 lg:h-4' /> 
          </div>

          <div className="nav-menus">
            {/* <NavLink to={`/home`} className={ ({isActive})  => { 
                return isActive ? 'nav-menu-active' : 'nav-menu' } }>
                  <div className="flex items-center gap-1">
                    <RiHome2Line className='sm:flex md:flex text-accent w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-4 lg:h-4' /> 
                    <span className='max-md:hidden'>Home</span>
                  </div>
            </NavLink> */}

            <NavLink to={`/meal/create`} className={ ({isActive})  => { 
                return isActive ? 'nav-menu-active' : 'nav-menu' } }>
                  <div className="flex items-center gap-1">
                    <RiBowlLine className='sm:flex md:flex text-accent  w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-4 lg:h-4' /> 
                    <span className='max-md:hidden'> Meal</span>
                  </div>
            </NavLink>

            <NavLink to={`/favorites/foods`} className={ ({isActive})  => { 
                return isActive ? 'nav-menu-active' : 'nav-menu' } }>
                  <div className="flex items-center gap-1">
                    <RiHeart2Line className='sm:flex md:flex text-accent  w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-4 lg:h-4' /> 
                    <span className='max-md:hidden'>Favorites</span>
                  </div>
            </NavLink>

            <NavLink to={`/contact`} className={ ({isActive})  => { 
                return isActive ? 'nav-menu-active' : 'nav-menu' } }>
                  <div className="flex items-center gap-1">
                    <RiPhoneLine className='sm:flex md:flex text-accent  w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-4 lg:h-4' /> 
                    <span className='max-md:hidden'>Contact</span>
                  </div>
            </NavLink>
          </div>

          <div className="nav-menu cursor-pointer mt-3">
              <RiUser3Line className='text-gray-500 hover:text-gray-600' onClick={() => setShowUserMenu(!showUserMenu)} />
          </div>

      </nav>




      
      {/* MOBILE MENU */}
      {
        showMenu && 
        (
          <div className="bg-white side-menus h-fit w-fit border border-accent/40 p-4 rounded-md shadow-md !mt-2 z-30 absolute">

            <div className="!flex-col !items-center py-3">
                {
                    categories?.data && categories?.data?.map((category) => (
                        <NavLink to={`/category-page/${category?._id}`} key={category?._id} className={ ({isActive})  => {  
                            return isActive ? 'side-menu-active mb-1' : 'side-menu mb-1'; } }>
                            {/* <span><RiCake2Line className='text-orange-400' /></span> */}
                            <img src={category?.photo || placeholder} alt={category?.name} className='text-orange-400 w-4 h-4 rounded-full' />
                                <span>{category?.name}</span>
                        </NavLink>
                    ))
                }
            </div>
        </div>
        )
      }

      {/* USER MOBILE MENU */}
      {
        showUserMenu && 
        (
          <div className="bg-white side-menus h-fit w-fit border border-accent/40 p-4 rounded-md shadow-md !mt-2 z-30 absolute !right-8">

            <div className="!flex-col !items-center py-3">
                <NavLink to={`/profile/${user?._id}`} className={ ({isActive})  => {  
                    return isActive ? 'side-menu-active' : 'side-menu'; } }>
                    <span><RiUser2Line className='text-orange-400 h-4 w-4' /></span>
                        <span>{user?.name}</span>
                </NavLink>

                <div className=" border-b-2 my-1.5" />

                {
                  user?.role === 'admin' && (
                    <>
                        <NavLink to={`/categories`} className={ ({isActive})  => {  
                            return isActive ? 'side-menu-active' : 'side-menu'; } }>
                            <span><RiGridLine className='text-orange-400 h-4 w-4' /></span>
                                <span>Categories</span>
                        </NavLink>

                        <NavLink to={`/restaurants`} className={ ({isActive})  => {  
                            return isActive ? 'side-menu-active' : 'side-menu'; } }>
                            <span><RiBuilding4Line className='text-orange-400 h-4 w-4' /></span>
                                <span>Restaurant</span>
                        </NavLink>

                        <NavLink to={`/manage-users`} className={ ({isActive})  => {  
                            return isActive ? 'side-menu-active' : 'side-menu'; } }>
                            <span><RiTeamLine className='text-orange-400 h-4 w-4' /></span>
                                <span>Manage Users</span>
                        </NavLink>
                    </>
                  )
                }

                <div className=" border-b-2 my-1.5" />



                <NavLink to={`/profile/${user?._id}`} onClick={handleLogout} className={'side-menu'}>
                    <span><RiLogoutCircleRLine className='text-red-600 h-4 w-4' /></span>
                    <span className='text-red-400'>Logout</span>
                </NavLink>
                
            </div>
        </div>
        )
      }
      
    </>
    
  )
}

export default Navbar