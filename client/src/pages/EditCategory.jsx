import { RiAddLine, RiApps2Line, RiBankLine, RiBowlLine, RiCheckboxMultipleBlankLine, RiCheckLine, RiDatabaseLine, RiDeleteBin2Line, RiImage2Line, RiMapPin2Line, RiPhoneLine, RiStarLine, RiTimeLine } from '@remixicon/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { useFormik } from 'formik'
import toast from 'react-hot-toast';
import { categorySchema } from '../schemas';
import placeholder from '../assets/placeholder.jpg'
import UploadFile from '../components/UploadFile';




const EditCategory = () => {
  const URL = import.meta.env.VITE_BASE_URL;


  const navigate = useNavigate();
  const params = useParams();
  const id = params.category_id;
  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData);

  const fetcher = (...args) => fetch(...args).then((Response) => Response.json());
  const { data: category, mutate_rest, error_rest, isLoading_rest } = useSWR(`${URL}/categories/${id}`, fetcher); 


  const [photo, setPhoto] = useState('');


//   console.log("The category " + category?.data)

 
    const onSubmit = async(values, actions) => {
        let answer;
        answer = window.confirm('Are you sure you want to update category ?');
        if (answer) 
        {
            try {
                const response = await fetch(`${URL}/categories/${id}`, {
                    method: 'PUT', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({ ...values, photo }),
                });
                const res = await response.json();
                if(res.success){
                    toast.success(res.message);
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                    
                    actions.resetForm();
                    return navigate(`/categories`);
                }
                else{
                    toast.error(res.message);
                }
            } catch (error) {
                toast.error("Error occurred while creating category: ", error.message);
                console.log("Error occurred while creating category: ", error.message);
            }
        }
    }


    const { values, touched, isSubmitting , errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { 
        name: category?.data?.name || '',  
        description: category?.data?.description || '',
        photo: category?.data?.photo || placeholder,
    },
    validationSchema: categorySchema,
    enableReinitialize: true,
    onSubmit,
    })
    
    
    
    


  // DELETE
  const handleDelete = (e) => {
    e.preventDefault(); 
    
    let answer;
    answer = confirm('Are you sure you want to remove category ?');
    if (answer && user?.role === 'admin') {
      removeCategory(id);
    }
  }


  const removeCategory = async (id) => {
    try { 
        const res = await fetch(`${URL}/categories/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        toast.success("Category was deleted"); 
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return navigate(`/categories`);

    } catch (error) {
      console.log("Error while deleting category ", error); 
      toast.error("Error occurred : ", error); 
    }
  }









  
  return (
    <section className='bg-accent-secondary p-6'>
        <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center gap-1'>
            <span>Edit {category?.data?.name} Meal</span>
            <div className='border-t-[3px] border-orange-400 w-[19rem]' />
        </div>

        <form onSubmit={handleSubmit}>
            <h4 className="mt-4 mb-5 text-[22px] font-normal text-center">
                Manage Category Details
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
            </div>


            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="description" className="label">
                        <RiMapPin2Line size={15} />
                        <span>Description</span>
                        {touched.description && errors.description ? <p className='form-error'>{errors.description}</p> : null} 
                    </label>
                    <textarea type="text" id="description" name="description" placeholder='Description' className='input-field'
                    value={values?.description} onChange={handleChange} onBlur={handleBlur} />
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <UploadFile photo={photo} setPhoto={setPhoto} />
                </div>
            </div>
            


            <div className="button-div !justify-between">

                <button type='submit' className='btn-create' disabled={isSubmitting} >
                    <RiCheckLine /> Update Category
                </button>

                <button type='button' className='btn-create !bg-red-500' onClick={handleDelete} >
                    <RiDeleteBin2Line className='w-4 h-4'  /> Delete Category
                </button>
            </div>
        </form>

      
    </section>
  )
}

export default EditCategory
