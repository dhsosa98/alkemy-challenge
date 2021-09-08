import React from 'react';
import { useState, useEffect } from 'react'
import totalBalances from '../../Hooks/totalBalances'
import BalanceChangeItem from '../BalanceChangeItem';
import BalanceForm from '../BalanceForm';
import balanceService from '../../services/balances';

export default function BalanceChangeList () {
    const [total, setTotal] = useState(0)
    const newBalanceInit = {concept: '', amount: 0, type: 'Income', date: 'undefined'}
    const [balanceList, setBalanceList] = useState([])
    const [newBalanceItem, setNewBalanceItem] = useState(newBalanceInit)
    const [isOpen, setIsOpen] = useState(false)
    const [isLoadingBalance, setIsLoadingBalance] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => { 
        balanceService.getBalanceList()
        .then(
            balanceListData =>{
            setBalanceList(balanceListData)
            setTotal(totalBalances(balanceListData))
            })
    }, [isLoadingBalance])

    const handleSubmitBalanceItem = (e) => {
        e.preventDefault()
        balanceService.submitBalanceItem(isEdit, newBalanceItem)
        .then(res => {
            setIsLoadingBalance(!isLoadingBalance)
            setIsOpen(!isOpen)
            setNewBalanceItem(newBalanceInit) })
    }

    const handleDeleteBalanceItem = (e , id) => {
        balanceService.deleteBalanceItem(id)
        .then(res => {
            setIsLoadingBalance(!isLoadingBalance)})
      }
    
    const handleUpdateBalanceItem = (e, balanceItem) => {
        setIsEdit(!isEdit)
        setIsOpen(!isOpen)
        setNewBalanceItem(balanceItem)
    }

    const handleChangeInputBalanceItem = (e) => {
        setNewBalanceItem({ 
            ...newBalanceItem, 
            [e.target.name]: e.target.value 
        })
    }

    return (
        <>
        <h1>Balance TOTAL IS {total}</h1>
        <button onClick={()=>{setIsOpen(!isOpen)}}>New</button>
        <h1>Lists</h1>
        {isOpen && <BalanceForm onSubmit={handleSubmitBalanceItem} onChange={handleChangeInputBalanceItem} newBalanceItem={newBalanceItem} />}
        <BalanceChangeItem balanceList={balanceList} onEdit={handleUpdateBalanceItem} onDelete={handleDeleteBalanceItem}/>
        </>
    )
}