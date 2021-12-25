import React from 'react';
import { useState, useEffect } from 'react'
import OperationsList from '../../components/OperationsList';
import ModalOperationForm from '../../components/ModalOperationForm';
import operationService from '../../services/operations';
import { PlusCircleIcon } from '@heroicons/react/solid';

export default function Home() {
    const [total, setTotal] = useState(0)
    const newOperationInit = {concept: '', amount: 0, type: 'Income', date: ''}
    const [operationList, setOperationList] = useState([])
    const [newOperationItem, setNewOperationItem] = useState(newOperationInit)
    const [isOpen, setIsOpen] = useState(false)
    const [isLoadingOperation, setIsLoadingOperation] = useState(false)
    const [isEdit, setIsEdit] = useState(false)


    useEffect(() => { 
        operationService.getOperationList()
        .then(
            operationListData =>{
            setOperationList(operationListData)
            setTotal(totalOperations(operationListData))
            })
    }, [isLoadingOperation])

    const totalOperations = (operations) => {
        let total = 0;
        operations?.forEach(operation => {
        let amountInt = parseInt(operation.amount)
            if (operation.type === 'Income'){
                total += amountInt
            }
            else {
                total -= amountInt
            }
        }
        )
        return total
    }
    
    const handleSubmitOperationItem = (e) => {
        e.preventDefault()
        operationService.submitOperationItem(isEdit, setIsEdit, newOperationItem)
        .then(res => {
            setIsLoadingOperation(!isLoadingOperation)
            setIsOpen(!isOpen)
            setNewOperationItem(newOperationInit) })
    }

    const handleDeleteOperationItem = (id) => {
        console.log("hola")
        operationService.deleteOperationItem(id)
        .then(res => {
            setIsLoadingOperation(!isLoadingOperation)})
      }
    
    const handleUpdateOperationItem = (operationItem) => {
        setIsEdit(!isEdit)
        setIsOpen(!isOpen)
        setNewOperationItem(operationItem)
    }

    const handleChangeInputOperationItem = (e) => {
        setNewOperationItem({ 
            ...newOperationItem, 
            [e.target.name]: e.target.value 
        })
    }

    const handleOpenModal = () => {
        setNewOperationItem(newOperationInit)
        setIsOpen(!isOpen)
    }
    return (
        <div className="sm:container sm:mx-auto px-4 text-gray-900">
            <div className='m-10'>
                <div className=' flex flex-col m-8'>
                    <h1 className='m-auto sm:text-3xl'>
                        Your balance is 
                        <strong className={`${total >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {" "}{total}
                        </strong>
                    </h1>
                    <div className='m-auto'>
                        <PlusCircleIcon className=' cursor-pointer h-10 text-indigo-600' onClick={handleOpenModal} />
                    </div>
                </div>
                <ModalOperationForm 
                onSubmit={handleSubmitOperationItem} 
                onChange={handleChangeInputOperationItem} 
                newOperationItem={newOperationItem} 
                isEdit={isEdit} 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                setIsEdit={setIsEdit}
                />
                <OperationsList 
                setOperationList={setOperationList} 
                operationList={operationList} 
                onEdit={handleUpdateOperationItem} 
                onDelete={handleDeleteOperationItem}
                />
                
            </div>
        </div>
    )
    
}
