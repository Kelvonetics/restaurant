import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import useSWR from 'swr';
import { useFormik } from 'formik'
import toast from 'react-hot-toast';
import { RiAddLine, RiBowlLine, RiCheckLine, RiMapPin2Line, RiPhoneLine, RiUser5Line } from '@remixicon/react';
import { userSchema } from '../../../schemas';



const ModifyUserModal = ({ user, userInfo, mutate, URL, showModal, closeModal }) => {



    
    
    const onSubmit = async (values, actions) => {
        const answer = window.confirm('Are you sure you want to update user role ?');
        if (!answer) return;

        if (user?.role !== 'admin') {
            toast.error('Only admins can update roles');
            return;
        }

        try {
            actions.setSubmitting(true);

            const response = await fetch(`${URL}/auth/update-user-role`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
            });

            const res = await response.json();

            if (res.success) {
            toast.success(res.message);
            mutate?.();         // refresh list
            actions.resetForm(); // resets to initialValues (which come from userToEdit)
            // Close the modal using the SAME state/controller that drives <Transition show={isOpen} />
            // Use next tick to avoid race conditions with Formik state updates + HeadlessUI transitions
            setTimeout(() => onClose?.(), 0);
            } else {
            toast.error(res.message || 'Update failed');
            }
        } catch (err) {
            console.log('Error updating user role:', err?.message);
            // toast.error('Something went wrong');
        } finally {
            actions.setSubmitting(false);
        }
    };



    const { values, touched, isSubmitting , errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { 
        _id: userInfo?._id,  
        name: userInfo?.name,      
        role: userInfo?.role,  
    },
    validationSchema: userSchema,
    enableReinitialize: true,
    onSubmit,
    })
    
    





    return (
        <div className=''>
            <Transition appear show={showModal} as={Fragment}>
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
                                <Dialog.Panel className={`modal-panel bg-gray-100 !w-[90vw] !sm:w-[85vw] md:!w-[70vw] lg:!w-[35vw] !min-h-[30vh]`}>
                                    <button type='button' onClick={closeModal}
                                        className={`modal-close-btn border-gray-400 hover:border-gray-300 hover:scale-110 transition-all ease-in-out duration-300`}>
                                        <span className={`text-red-500`}>x</span>
                                    </button>


                                    <form onSubmit={handleSubmit}>
                                        <h4 className="mt-4 mb-5 text-[22px] font-normal text-center">
                                           Update {values?.name} Role
                                        </h4>

                                        <input type="hidden" id="_id" name="_id" placeholder='id'
                                                value={values?._id} onChange={handleChange} onBlur={handleBlur} />


                                        <div className="input-wrapper">
                                            <div className="input-div">
                                                <label htmlFor="id" className="label">
                                                    <RiUser5Line size={15} />
                                                    <span>Role</span>
                                                    {touched.role && errors.role ? <p className='form-error'>{errors.role}</p> : null} 
                                                </label>
                                                <select id="role" name="role" className='select-field'
                                                value={values?.role} onChange={handleChange} onBlur={handleBlur} >
                                                    <option value=''>Select User Role</option>
                                                    <option value='user'> User Role</option>
                                                    <option value='admin'>Admin Role</option>
                                                </select>
                                            </div>
                                        </div>



                                        <div className="button-div !justify-center">
                                            <button type='submit' className='btn-create' disabled={isSubmitting} >
                                                <RiCheckLine /> Update
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

export default ModifyUserModal