import { useContext, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'
import { QueriesContext } from '../../QueriesContext'

const Pagination = ({...props}) => {
  const {cantOperations } = props

  const {page, size, querys, setHistorySearchParams} = useContext(QueriesContext)
  
  let pageLimit = { prev: ((page+1)*size-size)+1, next: (page+1)*size }
 

  useEffect(() => {
    if ((page)*(size) >= cantOperations){
      const cant = Math.floor(cantOperations / size)-1
      querys.set("page", cant>=0 ? cant : 0)
      setHistorySearchParams(querys)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [cantOperations, page, size])
    
    const handleNavigate = (e, pageLink) => {
      e.preventDefault()
      querys.set("page", pageLink)
      setHistorySearchParams(querys)
    }
    
    return (
        <>
        <div className="px-4 py-3 my-3 flex items-center justify-between sm:px-6">
        {cantOperations>size &&
        <div className=" container relative sm:hidden">
            {pageLimit.prev > size &&
          <div>
          <button
          onClick={(e)=>handleNavigate(e, page-1)}
            className="absolute items-center left-0 px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          </div>
            }
          {pageLimit.next<cantOperations &&
          <button
          onClick={(e)=>handleNavigate(e, page+1)}
            className="ml-3 absolute right-0 items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Next
          </button>
          }
          </div>
        }  
        {(cantOperations<=0) &&
        <div className='mx-auto'>
          <p className="text-sm text-gray-700">
          Nothing to Show
          </p>
        </div>}    
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          {cantOperations > 0 &&
            (<p className="text-sm text-gray-700">
              Showing <span className="font-medium">{pageLimit.prev}</span> to <span className="font-medium">{pageLimit.next<cantOperations ? `${pageLimit.next}` :`${cantOperations}`}</span> of{' '}
              <span className="font-medium">{cantOperations}</span> operations
            </p>)
           
          }
          <div>
          {cantOperations>size &&
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                {pageLimit.prev > size &&
              <button
                onClick={(e)=>handleNavigate(e, page-1)}
                className="relative inline-flex items-center px-2 py-2 rounded-l-full border border-indigo-600 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50 transform hover:scale-105 duration-300 ease-in-out"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>}
              {pageLimit.next<cantOperations &&
              <button
                onClick={(e)=>handleNavigate(e, page+1)}
                className="relative inline-flex items-center px-2 py-2 rounded-r-full border border-indigo-600 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50 transform hover:scale-105 duration-300 ease-in-out"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>}
            </nav>
            }
          </div>
        </div>
      </div>
      </>
    )
}

export default Pagination;