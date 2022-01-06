import { SearchIcon } from '@heroicons/react/outline';

const SearchBar = ({...props}) => {
   const {handleSearch, search, to, from, handleChangeSearch, handleChangeSearchFrom, handleChangeSearchTo} = props
    return (
        <form className='flex flex-row justify-center' onSubmit={handleSearch}>
            <input type="text" placeholder='Search by concept or category' className=' w-24 sm:text-lg sm:w-96 p-1 my-5 bg-white h-11 border-indigo-600 border-t border-l border-b rounded-l-lg outline-none text-xs' 
            value={search} onChange={handleChangeSearch} />
            <button className=''>
                <SearchIcon className='h-11 sm:text-lg py-3 pr-2 bg-white text-indigo-600 border-indigo-600 border-t border-b sm:hover:text-indigo-800 text-xs' />
            </button>
            <input type={from ? "date" : "text"}  placeholder='From: dd/mm/aaaa' 
            onFocus={
            (e)=> {
            e.currentTarget.type = "date";
            e.currentTarget.focus();
            }} 
            className=' w-28 sm:w-48 sm:text-lg p-1 my-5 -ml-1 bg-white h-11 border-indigo-600 border outline-none text-xs' 
            value={from} onChange={handleChangeSearchFrom} />
            <input type={to ? "date" : "text"} placeholder='To: dd/mm/aaaa' 
            onFocus={
            (e)=> {
            e.currentTarget.type = "date";
            e.currentTarget.focus();
            }} 
            className=' w-28 sm:w-48  sm:text-lg p-1 my-5 -ml-1 bg-white h-11 border-indigo-600 border rounded-r-lg outline-none text-xs' 
            value={to} onChange={handleChangeSearchTo} />
        </form>
    )
}

export default SearchBar