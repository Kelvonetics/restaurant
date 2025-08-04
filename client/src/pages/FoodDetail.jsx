import { RiBankLine, RiDeleteBin2Line, RiEditLine, RiHeart3Line, RiMapPin2Line, RiShoppingCartLine, RiStarFill, RiTimeLine, RiUser6Line } from '@remixicon/react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { resolveRatings } from '../lib'
import useSWR from 'swr'
import placeholder from '../assets/placeholder.jpg'
import toast from 'react-hot-toast'

const FoodDetail = () => {

  const URL = import.meta.env.VITE_BASE_URL;
  const params = useParams();
  const id = params.id;
  const cate = params.cate;
  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData);

  const navigate = useNavigate();


  const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
  const { data: food_data, mutate, error, isLoading } = useSWR(`${URL}/foods/food-details/${id}`, fetcher); 
  const food = food_data?.data;



  // console.log("FOOD ", food)


  // FAVORITE
  const handleFavorites= (e) => {
    e.preventDefault();    
    
    const favoriteData = {
      food_id: id,
      user_id: user?._id,
    };
    
    let answer;
    answer = confirm('Are you sure you want to save as favorite ?');
    if (answer) {
      addFavorite(favoriteData);
    }
  }



  const addFavorite = async (favoriteData) => {
    try { //return alert(favoriteData)
        const res = await fetch(`${URL}/foods/favorites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(favoriteData),
        });
        if (res) { 
          toast.success('Meal saved as favorite'); 
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
        else{
          toast.error(res?.message); 
        }
    } catch (error) {
      console.log("Error while adding favorite meal ", error); 
      toast.error("Error occurred : ", error); 
    }
    return navigate(`/favorites/foods`);
  }




  // DELETE
  const handleRemoveMeal = (e) => {
    e.preventDefault();
    
    let answer;
    answer = confirm('Are you sure you want to remove meal ?');
    if (answer && food?.owner?._id === user?._id) {
      removeMeal(id);
    }
    else{
      toast.error(`Sorry, only the owner of item can delete Item`)
    }
  }


  const removeMeal = async (id) => {
    try {
        const res = await fetch(`${URL}/foods/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res) { 
          toast.success('Food item was deleted'); 
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
        else{
          toast.error(`Failed to delete food item`); 
        }
    } catch (error) {
      console.log("Error while removing favorite meal ", error); 
      toast.error("Error occurred : ", error); 
    }
    return navigate(`/category-page/${cate}`);
  }









  return (
    <section>

      <div className="flex justify-between items-center mb-10">
          <div className="">
            <h2 className='flex flex-col gap-1 w-full text-2xl font-normal tracking-wider'>
                <span className='capitalize'> {food?.name} </span>
                <div className='border-t-[3px] border-orange-400 w-[18rem]' /> 
            </h2>
          </div>

          <div className="flex justify-end items-center gap-2">
              

              <form action="" onSubmit={handleFavorites}>
                <button type='submit' className="btn-round bg-fuchsia-600 text-white">
                    <RiHeart3Line size={16} /> 
                </button>
              </form>

              {
                // food?.owner?._id === user?._id && 
                (
                  <>
                    <NavLink to={`/meal/edit/${cate}/${food?._id}`} className="">
                      <div className="btn-round bg-emerald-600">
                        <RiEditLine size={16} /> 
                      </div>
                    </NavLink>
                
                    <form action="" onSubmit={handleRemoveMeal}>
                      <button type='submit' className="btn-round bg-red-600 text-white">
                          <RiDeleteBin2Line size={16} /> 
                      </button>
                    </form>
                  </>
                )
              }
          </div>
      </div>


    

      <div className="lg:flex sm:flex-col md:flex-col lg:flex-row justify-between gap-14 ">
        <div className="item-img sm:w-full lg:w-6/12">
            <img src={food?.imgUrl || placeholder} alt={food?.name} className='detail-img' />

            <div className="flex justify-start gap-4 mt-5">
              <img src={food?.imgUrl || placeholder} alt='' className='img-thumbnail' />
              <img src={food?.imgUrl || placeholder} alt='' className='img-thumbnail' />
              <img src={food?.imgUrl || placeholder} alt='' className='img-thumbnail' />
              <img src={food?.imgUrl || placeholder} alt='' className='img-thumbnail' />
              <img src={food?.imgUrl || placeholder} alt='' className='img-thumbnail' />
            </div>
        </div>

        <div className="item-desc-details sm:w-full lg:w-6/12 mt-24 lg:-mt-1">
            <div className="flex justify-between items-center item-title w-full">
                <div className='text-2xl font-normal'>
                  {food?.name}
                </div>
               
                <div className='flex items-center gap-2 text-right'  style={{ float: 'right' }} >
                  

                    {/* <img src={menu} alt="menu" className='h-7 w-7' /> */}
                </div>
            </div>

            <div className='text-[1rem] text-gray-600'>
                {food?.description}
            </div>

            <div className='flex items-center gap-5 text-[1rem] text-gray-600'>
                <span className='px-4 py-1 bg-indigo-200 rounded-md text-black'>Recipe : </span>
                {
                  <div className="flex items-center gap-2">
                      <span className='px-4 py-1 bg-accent-secondary rounded-md'> {food?.recipe} </span>
                  </div>
                  
                }
            </div>

            <div className="flex justify-between w-full text-[0.9rem]">
              <div className="font-medium  px-3 p-1 bg-emerald-200 rounded-md" >&#8358; {food?.price}</div>
              <div className="flex justify-end gap-1"> 
                <RiTimeLine size={18} className='text-accent animate-spin' /> <span>{food?.duration}</span>
              </div>
            </div>



            <div className="flex justify-between items-center w-full text-[0.9rem]">
              <div className="flex gap-2 items-center font-medium">
                <RiBankLine className='text-accent' />
                {
                  food?.restaurant?.map((restaurant) => (
                      <span key={restaurant?._id}>{restaurant?.name}</span>
                   ))
                }
              </div>

              <div className="flex justify-end items-center gap-0.5 text-[0.9rem]"> 
                <span className='mr-2'>Ratings </span>
                {
                  food?.ratings && resolveRatings(food?.ratings).map((rate) => (
                    <RiStarFill key={rate} size={18} className='text-accent' /> 
                  ))
                }
              </div>
            </div>

            <div className="flex justify-between items-center gap-2 text-[0.9rem] w-full">
              <div className="flex items-center gap-2">
                <RiMapPin2Line className='text-accent' />
                {
                  food?.restaurant?.map((restaurant) => (
                      <span key={restaurant?._id}>{restaurant?.address}</span>
                    ))
                }
              </div>
              
              <div className='flex items-center gap-1'>
                <RiUser6Line className='w-5 h-5 text-accent' />
                {food?.owner?.name}
              </div>
            </div>

            <button className='cart-btn'>
                <RiShoppingCartLine className='w-5 h-5' />
                <span>Add to Cart</span>
            </button>
        
        </div>
      </div>
    </section>
  )
}

export default FoodDetail
