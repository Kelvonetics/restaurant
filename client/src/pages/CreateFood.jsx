import { RiAddLine, RiBankLine, RiBowlLine, RiCheckboxMultipleBlankLine, RiImage2Line, RiApps2Line, RiMapPin2Line, RiStarLine, RiTimeLine, RiDatabaseLine } from '@remixicon/react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useSWR from "swr";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import UploadFile from '../components/UploadFile.jsx';
import { useFormik } from 'formik'
import { foodSchema } from '../schemas/index.js';
import placeholder from '../assets/placeholder.jpg'


const CreateFood = () => {



  const navigate = useNavigate();
  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData);

  const [photo, setPhoto] = useState('../assets/placeholder.jpg');


  const URL = import.meta.env.VITE_BASE_URL;
  const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
  const { data: categories, mutate, error, isLoading } = useSWR(`${URL}/categories`, fetcher); 
  const { data: restaurants, mutate_rest, error_rest, isLoading_rest } = useSWR(`${URL}/restaurants`, fetcher); 
  
//   console.log("Cate : ", categories);




    const onSubmit = async(values, actions) => {
        let answer;
        answer = window.confirm('Are you sure you want to create new food ?');
        if (answer) 
        {
            try {
                const response = await fetch(`${URL}/foods`, {
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({ ...values, imgUrl: photo, owner: user?._id }),
                });
                const res = await response.json();
                if(res.success){
                    toast.success(res?.message);
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                    actions.resetForm();
                    return navigate(`/category-page/${res?.data?.category[0]}`);
                }
                else{
                    toast.error(res.message);
                }
            } catch (error) {
                // toast.error("Error occurred while updating food : ", error.message);
                console.log("Error occurred while updating food : ", error.message);
            }
        }
    }




    const { values, touched, isSubmitting , errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { 
        name: '',  
        price: '',
        duration: '',
        recipe: '',
        ratings: 0,
        restaurant: '',
        category: '',
        description: '',
        imgUrl: placeholder,
        owner: user?._id,
    },
    validationSchema: foodSchema,
    onSubmit,
    })



 





  return (
    <section className='bg-accent-secondary p-6'>
        <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center gap-1'>
            <span>Create New Meal</span>
            <div className='border-t-[3px] border-orange-400 w-[13rem]' />
        </div>

        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="name" className="label">
                        <RiBowlLine size={15} />
                        <span>Name</span>
                        {touched.name && errors.name ? <p className='form-error'>{errors.name}</p> : null} 
                    </label>
                    <input type="text" id="name" name="name" placeholder='Name' className='input-field'
                    value={values?.name} onChange={handleChange} onBlur={handleBlur} />
                </div>

                <div className="input-div">
                    <label htmlFor="category" className="label">
                        <RiApps2Line size={15} />
                        <span>Category</span>
                    {touched.category && errors.category ? <p className='form-error'>{errors.category}</p> : null} 
                    </label>
                    <select id="category" name="category" className='select-field'
                    value={values?.category} onChange={handleChange} onBlur={handleBlur}>
                        <option value="">Select Category</option>
                        {
                            categories?.data && categories?.data?.map((category) => (
                                <option key={category?._id} value={category?._id}>
                                    {category?.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="price" className="label">
                        &#8358;
                        <span>Price</span>
                    {touched.price && errors.price ? <p className='form-error'>{errors.price}</p> : null} 
                    </label>
                    <input type="text" id="price" name="price" placeholder='Price' className='input-field'
                    value={values?.price} onChange={handleChange} onBlur={handleBlur}/>
                </div>

                <div className="input-div">
                    <label htmlFor="recipe" className="label">
                        <RiCheckboxMultipleBlankLine size={15} />
                        <span>Recipe</span>
                    {touched.recipe && errors.recipe ? <p className='form-error'>{errors.recipe}</p> : null} 
                    </label>
                    <input type="text" id="recipe" name="recipe" placeholder='Recipe' className='input-field'
                    value={values?.recipe} onChange={handleChange} onBlur={handleBlur} />
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="duration" className="label">
                        <RiTimeLine size={15} />
                        <span>Duration</span>
                    {touched.duration && errors.duration ? <p className='form-error'>{errors.duration}</p> : null} 
                    </label>
                    <select id="duration" name="duration" className='select-field' 
                    value={values?.duration} onChange={handleChange} onBlur={handleBlur}>
                        <option value=""></option>
                        <option value="5m">5 minutes</option>
                        <option value="10m">10 minutes</option>
                        <option value="15m">15 minutes</option>
                        <option value="20m">20 minutes</option>
                        <option value="25m">25 minutes</option>
                        <option value="30m">30 minutes</option>
                        <option value="35m">35 minutes</option>
                        <option value="40m">40 minutes</option>
                        <option value="45m">45 minutes</option>
                        <option value="50m">50 minutes</option>
                    </select>
                </div>

                <div className="input-div">
                    <label htmlFor="ratings" className="label">
                        <RiStarLine size={15} />
                        <span>Ratings</span>
                    {touched.ratings && errors.ratings ? <p className='form-error'>{errors.ratings}</p> : null} 
                    </label>
                    <select id="ratings" name="ratings" className='select-field'
                    value={values?.ratings} onChange={handleChange} onBlur={handleBlur} >
                        <option className='' value=""></option>
                        <option className='' value="1">1 Star</option>
                        <option className='' value="2">2 Star</option>
                        <option className='' value="3">3 Star</option>
                        <option className='' value="4">4 Star</option>
                        <option className='' value="5">5 Star</option>
                    </select>
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="restaurant" className="label">
                        <RiBankLine size={15} />
                        <span>Restaurant</span>
                    {touched.restaurant && errors.restaurant ? <p className='form-error'>{errors.restaurant}</p> : null} 
                    </label>
                    <select id="restaurant" name="restaurant" className='select-field'
                    value={values?.restaurant} onChange={handleChange} onBlur={handleBlur} >
                        <option value="">Select Restaurant</option>
                        {
                            restaurants?.data && restaurants?.data?.map((restaurant) => (
                                <option key={restaurant?._id} value={restaurant?._id}>
                                    {restaurant?.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-div">
                    <UploadFile photo={photo} setPhoto={setPhoto} />
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="description" className="label">
                        <RiDatabaseLine size={15} />
                        <span>Description</span>
                    {touched.description && errors.description ? <p className='form-error'>{errors.description}</p> : null} 
                    </label>
                    <textarea type="text" id="description" name="description" placeholder='Description' className='input-field' 
                    value={values?.description} onChange={handleChange} onBlur={handleBlur}></textarea>
                </div>

                {/* <div className="input-div">
                    <label htmlFor="" className="label"> Uploaded Photo</label>
                    <img src={values?.imgUrl} alt='Uploaded Photo' className='w-44 h-20 rounded-xl' />
                </div> */}
            </div>


            <div className="button-div">
                <button type='submit' className='btn-create' disabled={isSubmitting} >
                    <RiAddLine /> Create 
                </button>
            </div>
        </form>

      
    </section>
  )
}

export default CreateFood
