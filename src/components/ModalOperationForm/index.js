import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'

const ModalOperationForm = ({...props}) => {
    const { newOperationItem, onSubmit, onChange, isEdit, isOpen, setIsOpen} = props
    const cancelButtonRef = useRef(null)
    const handleCloseModal = () =>{
        setIsOpen(false)
    }
    return (
        <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={()=>{}} >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-40 text-center sm:block sm:p-0">
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
         <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
        <form className="p-5 inline-flex flex-col align-bottom bg-indigo-600 rounded-lg text-left overflow-hidden shadow-xl sm:translate-y-40 transform transition-all sm:my-5 sm:max-w-lg sm:w-full" onSubmit={onSubmit}>
            <h1 className='mx-auto mb-4 text-xl text-white'>
                {!isEdit ? <>{"Please insert a new Operation"}</> : <>{"Please update the Operation"}</>}
            </h1>
            <label className='text-white'>Concept: </label>
            <input placeholder='Example: Youtube Premium' className='mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md' name='concept' value={newOperationItem.concept} onChange={onChange} />

            <label className='text-white'>Category: </label>
            {newOperationItem.type==="Income" ? 
        <select className='mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md' value={newOperationItem.category} name='category' onChange={onChange}>
                <option value="Crypto">Crypto</option>
                <option value="Profit">Profit</option>
                <option value="Inheritance">Inheritance</option>
                <option value="Salary">Salary</option>
                <option value="Sale">Sale</option>
                <option value="Rental">Rental</option>
                <option value="Transaction">Transaction</option>
                <option value="Other">Other</option>
        </select>
            : 
        <select className='mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md' value={newOperationItem.category} name='category' onChange={onChange}>
            <option value="Crypto">Crypto</option>
            <option value="Food">Food</option>
            <option value="School">School</option>
            <option value="University">University</option>
            <option value="Internet">Internet</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Rental">Rental</option>
            <option value="Transaction">Transaction</option>
            <option value="Services">Services</option>
            <option value="Other">Other</option>
        </select>}

            <label className='text-white'>Amount: </label>
            <input className='mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md' type='number' name='amount' value={newOperationItem.amount} onChange={onChange} />

            <label className='text-white'>Type: </label>
            <select className='mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md' defaultValue={newOperationItem.type} name='type' onChange={onChange} disabled={isEdit} >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            
            <label className='text-white'>Date: </label>
            <input className='mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md' type='date' name='date' value={newOperationItem.date} onChange={onChange} />
            <div className='flex justify-around m-4 text-white'>
                <button className={`w-20  ${!isEdit ? "bg-green-500" : "bg-indigo-400"} rounded-md p-1`} type='submit'>{isEdit ? <>{"Update"}</> : <>{"Add"}</> }</button>
                <button className=' w-20 bg-red-500 rounded-md p-1' type='button' ref={cancelButtonRef} onClick={handleCloseModal}>Close</button>
            </div>
        </form>
        </Transition.Child>
        </div>
        </Dialog>
        </Transition.Root>
    )
}

export default ModalOperationForm