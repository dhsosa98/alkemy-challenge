import { useState } from 'react'
import Pagination from '../Pagination'

import { SortAscendingIcon, SortDescendingIcon } from "@heroicons/react/solid"
import ModalWindow from '../ModalWindow'
import OperationItem from '../OperationItem'


const OperationsList = ({operationList, setOperationList, onDelete, onEdit}) => {
    const modalText = "Are you sure you want to delete this operation?"
    const cantOperations = operationList.length
    const [deleteId, setDeleteId] = useState(null)
    const [open, setOpen] = useState(false)
    const [toggleSortConcept, setToggleSortConcept] = useState(false)
    const [toggleSortAmount, setToggleSortAmount] = useState(false)
    const [toggleSortType, setToggleSortType] = useState(false)
    const [toggleSortDate, setToggleSortDate] = useState(false)
    const limit = {
      prev: 0,
      next: 9 
    }
    const [pageLimit, setPageLimit] = useState(limit)

    const handleToggleSort = (e, toggleSort, setToggleSort) => {
        let name = e.target.getAttribute("name")
        console.log(name)
        const operationSorted = operationList.sort((a,b)=>(a[name] > b[name] ? 1 : b[name] > a[name] ? -1 : 0))
        console.log(operationSorted)
        const operationSortedReverse = [...operationList].reverse()
        console.log(operationSortedReverse)
        setToggleSort(!toggleSort)
        if (toggleSort){
          setOperationList(operationSorted)
          } 
        else {
          setOperationList(operationSortedReverse)
          }
    }

    const handleDeleteOperation = () => {
        console.log(deleteId)
        onDelete(deleteId)
        setDeleteId(null)
        setOpen(false)
    }

    return (
      
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-lg table-auto">
                  <thead className="bg-indigo-600">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left  text-white uppercase tracking-wider"
                      >
                        Concept
                        {toggleSortConcept ? 
                        <SortAscendingIcon name="concept" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortConcept, setToggleSortConcept)}}/> 
                        : <SortDescendingIcon name="concept" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortConcept, setToggleSortConcept)}}/>
                        }
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-white uppercase tracking-wider"
                      >
                        Amount
                        {toggleSortAmount ? 
                        <SortAscendingIcon name="amount" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortAmount, setToggleSortAmount)}}/> 
                        : <SortDescendingIcon name="amount" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortAmount, setToggleSortAmount)}}/>
                        }
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-white uppercase tracking-wider"
                      >
                        Type
                        {toggleSortType ? 
                        <SortAscendingIcon name="type" className=" h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortType, setToggleSortType)}}/> 
                        : <SortDescendingIcon name="type" className=" h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortType, setToggleSortType)}}/>
                        }
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-white uppercase tracking-wider"
                      >
                        Date
                        {toggleSortDate ? 
                        <SortAscendingIcon name="date" className=" h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortDate, setToggleSortDate)}}/> 
                        : <SortDescendingIcon name="date" className=" h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortDate, setToggleSortDate)}}/>
                        }
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <OperationItem operationList={operationList} onEdit={onEdit} setOpen={setOpen} setDeleteId={setDeleteId} pageLimit={pageLimit}  />
                </table>
              </div>
            </div>
          </div>
          <Pagination pageLimit={pageLimit} setPageLimit={setPageLimit} cantOperations={cantOperations} />
          <ModalWindow modalText={modalText} open={open} setOpen={setOpen} handleConfirm={handleDeleteOperation} type="delete"/>
        </div>
      )

}
export default OperationsList