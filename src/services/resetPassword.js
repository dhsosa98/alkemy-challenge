import axios from 'axios'
let APIURL
    if (process.env.NODE_ENV === 'development') {
        APIURL = 'http://localhost:4000'}
    else{
        APIURL = 'https://alkemy-back-challenge.herokuapp.com'
}
const baseURL = `${APIURL}/api/users/reset-password`

export const resetPassword = async (credentials) => {
    try{
    const {data} = await axios.put(baseURL, credentials)
    console.log(data)
    return data
    }
    catch(error){
        console.log(error)
    }
}