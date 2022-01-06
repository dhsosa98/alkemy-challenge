import React from 'react';
import { useState, useEffect } from 'react'
import OperationsList from '../../components/OperationsList';
import ModalOperationForm from '../../components/ModalOperationForm';
import operationService from '../../services/operations';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import BalanceBox from '../../components/BalanceBox';

export default function Home() {
    const [total, setTotal] = useState(0)
    const newOperationInit = {concept: '', category: 'Crypto', amount: 0, type: 'Income', date: ''}
    const [operationList, setOperationList] = useState([])
    const [newOperationItem, setNewOperationItem] = useState(newOperationInit)
    const [isOpen, setIsOpen] = useState(false)
    const [isLoadingOperation, setIsLoadingOperation] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [cantOperations, setCantOperations] = useState(0)
    const history = useHistory()
    const location = useLocation()
    let query = new URLSearchParams(location.search)
    const page = parseInt(query.get("page")) || 0  
    const size = parseInt(query.get("size")) || 10 
    const [search, setSearch] = useState(query.get("search") || '')
    const [from, setFrom] = useState(query.get("from") || '')
    const [to, setTo] = useState(query.get("to") || '')
    query.set("page", page)
    query.set("size", size)
    const [querys, setQuerys] = useState(query)

    useEffect(()=> {
        setIsLoadingOperation(!isLoadingOperation)
        if (!querys){setQuerys(new URLSearchParams(location.search))}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    useEffect(() => { 
        operationService.getOperationList(querys)
        .then(
            operations =>{
            const {rows, count, total} = operations || {}
            setCantOperations(count)
            setOperationList(rows?.map((operation)=>{ 
                if (!operation["date"]){
                    operation["date"]=''}
                return operation}))
            setTotal(total)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoadingOperation])

    useEffect(()=>{
        search ? querys.set("search", search) : querys.delete("search")
        from ? querys.set("from", from) : querys.delete("from")
        to ? querys.set("to", to) : querys.delete("to")
        setQuerys(querys)
        setIsLoadingOperation(!isLoadingOperation)
        history.push("/?"+querys) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, from, to])
    
    const handleSubmitOperationItem = (e) => {
        e.preventDefault()
        operationService.submitOperationItem(isEdit, newOperationItem)
        .then(() => {
            setIsLoadingOperation(!isLoadingOperation)
            setIsOpen(!isOpen)
            setNewOperationItem(newOperationInit)
            })
    }

    const handleDeleteOperationItem = (id) => {
        operationService.deleteOperationItem(id)
        .then(() => {
            setIsLoadingOperation(!isLoadingOperation)})
      }
    
    const handleUpdateOperationItem = (operationItem) => {
        setIsEdit(true)
        setIsOpen(true)
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
        setIsOpen(true)
        setIsEdit(false)
    }

    const handleChangeSearch = (e) =>{
        setSearch(e.target.value)
    }

    const handleChangeSearchFrom = (e) =>{
        setFrom(e.target.value)
    }

    const handleChangeSearchTo = (e) =>{
        setTo(e.target.value)
    }

    const handleSearch = (e) =>{
        e.preventDefault() 
        search ? querys.set("search", search) : querys.delete("search")
        from ? querys.set("from", from) : querys.delete("from")
        to ? querys.set("to", to) : querys.delete("to")
        setQuerys(querys)
        setIsLoadingOperation(!isLoadingOperation)
        history.push("/?"+querys)  
    }
    return (
        <div className="container sm:mx-auto  text-gray-900">
                <BalanceBox total={total} handleOpenModal={handleOpenModal} />
                <SearchBar 
                search={search}
                to={to}
                from={from}
                handleChangeSearchTo={handleChangeSearchTo}
                handleChangeSearch={handleChangeSearch}
                handleChangeSearchFrom={handleChangeSearchFrom}
                handleSearch={handleSearch}
                />
                <OperationsList 
                operationList={operationList} 
                onEdit={handleUpdateOperationItem} 
                onDelete={handleDeleteOperationItem}
                page={page}
                size={size}
                cantOperations={cantOperations}
                isSort={isLoadingOperation}
                setIsSort={setIsLoadingOperation}
                querys={querys}
                    
                />  
                <ModalOperationForm 
                onSubmit={handleSubmitOperationItem} 
                onChange={handleChangeInputOperationItem} 
                newOperationItem={newOperationItem} 
                isEdit={isEdit} 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                setIsEdit={setIsEdit}
                />    
        </div>
    )
    
}
