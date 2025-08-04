import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Index = () => {

    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);


  useEffect(() => {
      if(user === undefined || user === '' || user === null){
          return navigate(`/`); 
      }       
  }, [user]);   






  return (
    <main className='relative'>
      <div className="md:mx-4 lg:mx-auto flex justify-between">
        <Sidebar />

        <div className="content w-full">
              <Navbar showMenu={showMenu} setShowMenu={setShowMenu} showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />

              <div className="mt-6 overflow-auto flex flex-1 flex-col" onClick={() => [setShowMenu(false), setShowUserMenu(false)]}>
                <Outlet />
              </div>
        </div>
      </div>
    </main>
  )
}

export default Index
