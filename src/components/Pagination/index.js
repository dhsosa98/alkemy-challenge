import { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({pageLimit, setPageLimit, cantOperations}) => {
    const cantLimit = 10
    const handleChangePagePrev = () =>{
        if (pageLimit.prev>0){
            setPageLimit({prev: pageLimit.prev-cantLimit, next: pageLimit.prev-1})
        }
    }
    const handleChangePageNext = () =>{
        if (pageLimit.next<=cantOperations-2){
        setPageLimit({prev: pageLimit.next+1, next: pageLimit.next+cantLimit})
        }
    }
    useEffect(() => {
        if (cantOperations % cantLimit === 0){
            if (pageLimit.prev > 0){
                setPageLimit({prev: pageLimit.prev-cantLimit, next: pageLimit.prev-1})
            }
        }
    }, [cantOperations, pageLimit, setPageLimit])
    return (
        <>
        {cantOperations>0 && 
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        
        {cantOperations>cantLimit && 
        <div className=" container relative sm:hidden">
            {pageLimit.prev >= cantLimit &&
          <button
            onClick={handleChangePagePrev}
            className="absolute items-center left-0 px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
            }
          {pageLimit.next+1<cantOperations &&
          <button
            onClick={handleChangePageNext}
            className="ml-3 absolute right-0 items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Next
          </button>}
          </div>
        }      
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{pageLimit.prev+1}</span> to <span className="font-medium">{pageLimit.next<cantOperations ? `${pageLimit.next+1}` :`${cantOperations}`}</span> of{' '}
              <span className="font-medium">{cantOperations}</span> operations
            </p>
          </div>
          <div>
          {cantOperations>cantLimit &&
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                {pageLimit.prev >= cantLimit &&
              <button
                onClick={handleChangePagePrev}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-indigo-600 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>}
              {pageLimit.next+1<cantOperations &&
              <button
                onClick={handleChangePageNext}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-indigo-600 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>}
            </nav>
            }
          </div>
        </div>
      </div>}
      </>
    )
}

export default Pagination;