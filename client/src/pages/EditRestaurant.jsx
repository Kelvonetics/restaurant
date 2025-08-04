import { RiAddLine, RiApps2Line, RiBankLine, RiBowlLine, RiCheckboxMultipleBlankLine, RiCheckLine, RiDatabaseLine, RiDeleteBin2Line, RiImage2Line, RiMapPin2Line, RiPhoneLine, RiStarLine, RiTimeLine } from '@remixicon/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { useFormik } from 'formik'
import toast from 'react-hot-toast';
import { restaurantSchema } from '../schemas';




const EditRestaurant = () => {
  const URL = import.meta.env.VITE_BASE_URL;


  const navigate = useNavigate();
  const params = useParams();
  const id = params.restaurant_id;
  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData);

  const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
  const { data: restaurant, mutate_rest, error_rest, isLoading_rest } = useSWR(`${URL}/restaurants/${id}`, fetcher); 



 
    const onSubmit = async(values, actions) => {
        let answer;
        answer = window.confirm('Are you sure you want to update restaurant ?');
        if (answer) 
        {
            try {
                const response = await fetch(`${URL}/restaurants/${id}`, {
                    method: 'PUT', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify(values),
                });
                const res = await response.json();
                if(res.success){
                    toast.success(res.message);
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                    
                    actions.resetForm();
                    return navigate(`/restaurants`);
                }
                else{
                    toast.error(res.message);
                }
            } catch (error) {
                toast.error("Error occurred while creating restaurant: ", error.message);
                console.log("Error occurred while creating restaurant: ", error.message);
            }
        }
    }


    const { values, touched, isSubmitting , errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { 
        name: restaurant?.data?.name || '',  
        address: restaurant?.data?.address || '',
        phone: restaurant?.data?.phone || '',
    },
    validationSchema: restaurantSchema,
    enableReinitialize: true,
    onSubmit,
    })
    
    


  // DELETE
  const handleDelete = (e) => {
    e.preventDefault(); 
    
    let answer;
    answer = confirm('Are you sure you want to remove restaurant ?');
    if (answer && user?.role === 'admin') {
      removeRestaurant(id);
    }
  }


  const removeRestaurant = async (id) => {
    try { 
        const res = await fetch(`${URL}/restaurants/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        toast.success("Restaurant was deleted"); 
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return navigate(`/restaurants`);

    } catch (error) {
      console.log("Error while deleting restaurant ", error); 
      toast.error("Error occurred : ", error); 
    }
  }








  
  return (
    <section className='bg-accent-secondary p-6'>
        <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center gap-1'>
            <span>Edit {restaurant?.data?.name} Meal</span>
            <div className='border-t-[3px] border-orange-400 w-[19rem]' />
        </div>

        <form onSubmit={handleSubmit}>
            <h4 className="mt-4 mb-5 text-[22px] font-normal text-center">
                Manage Restaurant Details
            </h4>

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
                    <label htmlFor="phone" className="label">
                        <RiPhoneLine size={15} />
                        <span>Phone</span>
                        {touched.phone && errors.phone ? <p className='form-error'>{errors.phone}</p> : null} 
                    </label>
                    <input type="text" id="phone" name="phone" placeholder='Phone' className='input-field'
                    value={values?.phone} onChange={handleChange} onBlur={handleBlur} />
                </div>
            </div>


            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="address" className="label">
                        <RiMapPin2Line size={15} />
                        <span>Address</span>
                        {touched.address && errors.address ? <p className='form-error'>{errors.address}</p> : null} 
                    </label>
                    <textarea type="text" id="address" name="address" placeholder='Address' className='input-field'
                    value={values?.address} onChange={handleChange} onBlur={handleBlur} />
                </div>
            </div>


            <div className="button-div !justify-between">
                <button type='submit' className='btn-create' disabled={isSubmitting} >
                    <RiCheckLine /> Update Restaurant
                </button>

                <button type='button' className='btn-create !bg-red-500' onClick={handleDelete} >
                    <RiDeleteBin2Line className='w-4 h-4'/> Delete Restaurant
                </button>
            </div>

        </form>

      
    </section>
  )
}

export default EditRestaurant
