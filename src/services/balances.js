import axios from "axios"

const baseURL = 'http://localhost:4000/balances'

const submitBalanceItem = async (isEdit, newBalanceItem) => {
if (!isEdit){
        return axios.post(baseURL, newBalanceItem).then(res => res.data) 
    }
    else{
        return axios.patch(baseURL, newBalanceItem).then(res => res.data)
    }
}

const deleteBalanceItem = async (id) => {
  return axios.delete(baseURL+'/'+id).then(res => res.data)
}

const getBalanceList = async () => {
   return axios.get(baseURL+'/userBalances').then(res => {
        return res.data.data
        })
}

const balanceService = {getBalanceList, deleteBalanceItem, submitBalanceItem}

export default balanceService