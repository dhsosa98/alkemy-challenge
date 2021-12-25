import axios from "axios"

const baseURL = 'http://localhost:4000/operations'

const submitOperationItem = async (isEdit, setIsEdit, newOperationItem) => {
const config = {headers: {authorization: sessionStorage.getItem('token')}}
if (!isEdit){
        return axios.post(baseURL, newOperationItem, config).then(res => res.data) 
    }
    else{
      setIsEdit(false)
        return axios.patch(baseURL, newOperationItem).then(res => res.data)
    }
}

const deleteOperationItem = async (id) => {
  const config = {headers: {authorization: sessionStorage.getItem('token')}}
  return axios.delete(baseURL+'/'+id, config).then(res => res.data)
}

const getOperationList = async () => {
  try{
    const config = {headers: {authorization: sessionStorage.getItem('token')}}
    const {data} = await axios.get(baseURL+'/userOperations', config)
    console.log(data)
    return data.data}
  catch{}
}

const operationService = {getOperationList, deleteOperationItem, submitOperationItem}

export default operationService