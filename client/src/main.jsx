import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';
import Hero from './components/Hero.jsx';
import FoodDetail from './pages/FoodDetail.jsx';
import Contact from './pages/Contact.jsx';
import CreateFood from './pages/CreateFood.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import EditFood from './pages/EditFood.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Toaster } from "react-hot-toast";
import Favorite from './pages/Favorite.jsx';
import Restaurants from './pages/Restaurants.jsx';
import Categories from './pages/Categories.jsx';
import EditRestaurant from './pages/EditRestaurant.jsx';
import EditCategory from './pages/EditCategory.jsx';
import AccessDenied from './pages/AccessDenied.jsx';
import NotFound from './pages/NotFound.jsx';
import Profile from './pages/Profile.jsx';
import ManageUsers from './pages/ManageUsers.jsx';



const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },



   { path: '/home', element: <App />,
    children: [
      { path: '/home', element: <Hero />, }
    ]
   },

   { path: '/', element: <App />,
    children: [
      { path: '/contact', element: <Contact />, }
    ]
   },



  { path: '/category-page', element: <App />,
    children: [
      { path: '/category-page/:category_id', element: <CategoryPage />, }
    ]
   },


  
   { path: '/category', element: <App />,
    children: [
      { path: '/category/foods/:cate/:id', element: <FoodDetail />, }
    ]
   },
  
   { path: '/favorites', element: <App />,
    children: [
      { path: '/favorites/foods', element: <Favorite />, }
    ]
   },

  


  
   { path: '/meal', element: <App />,
    children: [
      { path: '/meal/create', element: <CreateFood />, }
    ]
   },

   { path: '/meal', element: <App />,
    children: [
      { path: '/meal/edit/:category/:id', element: <EditFood />, }
    ]
   },



   { path: '/categories', element: <App />,
    children: [
      { path: '/categories', element: <Categories />, }
    ]
   },
   { path: '/categories', element: <App />,
    children: [
      { path: '/categories/edit/:category_id', element: <EditCategory />, }
    ]
   },


   { path: '/restaurants', element: <App />,
    children: [
      { path: '/restaurants', element: <Restaurants />, }
    ]
   },

   { path: '/restaurants', element: <App />,
    children: [
      { path: '/restaurants/edit/:restaurant_id', element: <EditRestaurant />, }
    ]
   },

   { path: '/profile', element: <App />,
    children: [
      { path: '/profile/:user_id', element: <Profile />, }
    ]
   },

   { path: '/manage-users', element: <App />,
    children: [
      { path: '/manage-users', element: <ManageUsers />, }
    ]
   },
  





  { path: '/access-denied', element: <AccessDenied /> },
  // { path: '/*', element: <NotFound /> },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster position='top-right' />
  </React.StrictMode>
)
