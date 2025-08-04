import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import useSWR from 'swr';
import { useFormik } from 'formik'
import toast from 'react-hot-toast';
import { RiAddLine, RiBowlLine, RiMapPin2Line, RiPhoneLine } from '@remixicon/react';
import { categorySchema } from '../../../schemas';
import UploadFile from '../../UploadFile';



const CreateCategoryModal = ({ URL, placeholder, showCreateModal, closeModal }) => {

    
    const [photo, setPhoto] = useState('');
    
    const onSubmit = async(values, actions) => {
        let answer;
        answer = window.confirm('Are you sure you want to create category ?');
        if (answer) 
        {
            try {
                const response = await fetch(`${URL}/categories`, {
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({ ...values, photo}),
                });
                const res = await response.json();
                if(res.success){
                    toast.success(res.message);
                    showCreateModal(false);
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                    
                    actions.resetForm();  return 
                }
                else{
                    toast.error(res.message);
                }
            } catch (error) {
                // toast.error("Error occurred while creating category: ", error.message);
                console.log("Error occurred while creating category: ", error.message);
            }
        }
    }


    const { values, touched, isSubmitting , errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { 
        name: '',  
        description: '',
        photo: placeholder,
    },
    validationSchema: categorySchema,
    onSubmit,
    })
    
    





    return (
        <div className=''>
            <Transition appear show={showCreateModal} as={Fragment}>
                <Dialog as='div' className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-500'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-700'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className={`fixed inset-0 bg-black bg-opacity-30`} />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full min-w-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-500'
                                enterFrom='opacity-0 scale-90'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-700'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-90'
                            >
                                <Dialog.Panel className={`modal-panel bg-gray-100 !w-[90vw] !sm:w-[85vw] md:!w-[70vw] lg:!w-[45vw] !min-h-[40vh]`}>
                                    <button type='button' onClick={closeModal}
                                        className={`modal-close-btn border-gray-400 hover:border-gray-300 hover:scale-110 transition-all ease-in-out duration-300`}>
                                        <span className={`text-red-500`}>x</span>
                                    </button>


                                    <form onSubmit={handleSubmit}>
                                        <h4 className="mt-4 mb-5 text-[22px] font-normal text-center">
                                           Create New Category
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
                                        


                                        <div className="button-div">
                                            <button type='submit' className='btn-create' disabled={isSubmitting} >
                                                <RiAddLine /> Add Category
                                            </button>
                                        </div>

                                    </form>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default CreateCategoryModal