import axios from 'axios'
let APIURL
    if (process.env.NODE_ENV === 'development') {
        APIURL = 'http://localhost:4000'}
    else{
        APIURL = 'https://alkemy-back-challenge.herokuapp.com'
}
const baseURL = `${APIURL}/api/users/login`

export const getUser = async (credentials) => {
    try{
    const {data} = await axios.post(baseURL, credentials)
    console.log(data)
    return data
    }
    catch(error){
        console.log(error)
    }
}