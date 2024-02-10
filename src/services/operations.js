import axios from "axios"
let APIURL
    if (process.env.NODE_ENV === 'development') {
        APIURL = 'http://localhost:4000'}
    else{
        APIURL = 'https://alkemy-challenge-back.vercel.app'
}
const baseURL = `${APIURL}/api/operations`

const submitOperationItem = async (isEdit, newOperationItem) => {
const config = {headers: {authorization: localStorage.getItem('token')}}
if (!isEdit){
        return axios.post(baseURL, newOperationItem, config).then(res => res.data) 
    }
    else{
        return axios.patch(baseURL, newOperationItem, config).then(res => res.data)
    }
}

const deleteOperationItem = async (id) => {
  const config = {headers: {authorization: localStorage.getItem('token')}}
  return axios.delete(baseURL+'/'+id, config).then(res => res.data)
}

const getOperationList = async (query) => {
  try{
    const config = {headers: {authorization: localStorage.getItem('token')}}
    const {data} = await axios.get(baseURL+'/userOperations?'+query, config)
    return data.data.operations}
  catch{}
}

const operationService = {getOperationList, deleteOperationItem, submitOperationItem}

export default operationService