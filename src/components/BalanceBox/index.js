import { PlusCircleIcon } from '@heroicons/react/solid';

const BalanceBox = ({...props}) => {
     const {total, handleOpenModal} = props
    return (
        <div className=' flex flex-col mt-8'>
        <h1 className='mx-auto text-lg sm:text-3xl'>
            Your balance is 
            <strong className={`${total >= 0 ? "text-green-500" : "text-red-500"}`}>
            {" $"}{total}
            </strong>
        </h1>
        <div className='mx-auto'>
            <PlusCircleIcon className=' cursor-pointer h-10 text-indigo-600' onClick={handleOpenModal} />
        </div>
    </div> 
    )
}
export default BalanceBox