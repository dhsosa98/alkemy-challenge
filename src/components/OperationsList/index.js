import { useState } from 'react'
import Pagination from '../Pagination'

import { SortAscendingIcon, SortDescendingIcon } from "@heroicons/react/solid"
import ModalWindow from '../ModalWindow'
import OperationItem from '../OperationItem'
import { useHistory } from 'react-router-dom'


const OperationsList = ({...props}) => {
    const {operationList, onDelete, onEdit, cantOperations, page, size, isSort, setIsSort, querys} = props
    const history = useHistory()
    const modalText = "Are you sure you want to delete this operation?"
    const [deleteId, setDeleteId] = useState(null)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [toggleSortConcept, setToggleSortConcept] = useState(false)
    const [toggleSortCategory, setToggleSortCategory] = useState(false)
    const [toggleSortAmount, setToggleSortAmount] = useState(false)
    const [toggleSortType, setToggleSortType] = useState(false)
    const [toggleSortDate, setToggleSortDate] = useState(false)

    const handleToggleSort = (e, toggleSort, setToggleSort) => {
        e.preventDefault()
        const name = e.currentTarget.getAttribute("name") || "concept"
        let query = querys
        let sortString = ''
        toggleSort ? (sortString = name+"%ASC") : (sortString = name+"%DESC")
        query.get("sort") 
          ?
          (
          query.get("sort").includes(name) 
          ?
          query.set("sort", query.get("sort").split(name)[0] + sortString)
          :
          query.set("sort", query.get("sort") + "#" + sortString)
          )
          :
          query.set("sort", sortString)
        setIsSort(!isSort)
        setToggleSort(!toggleSort)
        history.push("/?"+querys)
    }

    const handleDeleteOperation = () => {
        onDelete(deleteId)
        setDeleteId(null)
        setOpenDeleteModal(false)
    }

    const handleResetSort = (e, setResetSort) => {
      let name = e.currentTarget.getAttribute("name") || "concept"
      let sort = querys.get("sort")
      let regex = new RegExp(`#*${name}%ASC#*|#*${name}%DESC#*`, "i")      
      !sort.split("#")[0].search(regex) 
      || 
      !sort.split("#")[sort.split("#").length-1].search(regex)   
      ? 
      (sort= sort.replace(regex, "")) 
      :  
      (sort= sort.replace(regex, "#")) 
      querys.set("sort", sort)
      !sort && querys.delete("sort")
      setResetSort(false)
      history.push("/?"+querys)
    }

    return (
        <>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-lg table-auto">
                  <thead className="bg-indigo-600">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 sm:px-6 py-3 text-left  text-white uppercase tracking-wider"
                      >
                        <button name='concept' onClick={(e)=>{handleResetSort(e, setToggleSortConcept)}}>
                        Concept</button>
                        {toggleSortConcept ? 
                        <SortAscendingIcon name="concept" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortConcept, setToggleSortConcept)}}/> 
                        : <SortDescendingIcon name="concept" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortConcept, setToggleSortConcept)}}/>
                        }
                      </th>
                      <th
                        scope="col"
                        className="px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider"
                      >
                        <button name='category' onClick={(e)=>{handleResetSort(e, setToggleSortCategory)}}>
                          Category</button>
                        {toggleSortCategory ? 
                        <SortAscendingIcon name="category" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortCategory, setToggleSortCategory)}}/> 
                        : <SortDescendingIcon name="category" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortCategory, setToggleSortCategory)}}/>
                        }
                      </th>
                      <th
                        scope="col"
                        className="px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider"
                      > 
                        
                        <button name='amount' onClick={(e)=>{handleResetSort(e, setToggleSortAmount)}}>
                        Amount</button>
                        {toggleSortAmount ? 
                        <SortAscendingIcon name="amount" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortAmount, setToggleSortAmount)}}/> 
                        : <SortDescendingIcon name="amount" className="h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortAmount, setToggleSortAmount)}}/>
                        }
                      </th>
                      <th
                        scope="col"
                        className="px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider"
                      >
                        <button name='type' onClick={(e)=>{handleResetSort(e, setToggleSortType)}}>
                        Type</button>
                        {toggleSortType ? 
                        <SortAscendingIcon name="type" className=" h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortType, setToggleSortType)}}/> 
                        : <SortDescendingIcon name="type" className=" h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortType, setToggleSortType)}}/>
                        }
                      </th>
                      <th
                        scope="col"
                        className="px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider"
                      >
                        <button name='date' onClick={(e)=>{handleResetSort(e, setToggleSortDate)}}>
                        Date</button>
                        {toggleSortDate ? 
                        <SortAscendingIcon name="date" className=" h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortDate, setToggleSortDate)}}/> 
                        : <SortDescendingIcon name="date" className=" h-6 sm:h-10 cursor-pointer" 
                        onClick={(e)=>{handleToggleSort(e, toggleSortDate, setToggleSortDate)}}/>
                        }
                      </th>
                      <th scope="col" className="relative px-3 sm:px-6 py-3">
                        <span className="sr-only">Delete</span>
                      </th>
                      <th scope="col" className="relative px-3 sm:px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <OperationItem operationList={operationList} onEdit={onEdit} setOpen={setOpenDeleteModal} setDeleteId={setDeleteId} />
                </table>
              </div>
            </div>
          </div>
          <Pagination cantOperations={cantOperations} page={page} size={size} querys={querys} />
          <ModalWindow modalText={modalText} open={openDeleteModal} setOpen={setOpenDeleteModal} handleConfirm={handleDeleteOperation} type="delete"/>
        </>
      )

}
export default OperationsList