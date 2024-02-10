import axios from "axios"
let APIURL
    if (process.env.NODE_ENV === 'development') {
        APIURL = 'http://localhost:4000'}
    else{
        APIURL = 'https://alkemy-challenge-back.vercel.app'
}
const baseURL = `${APIURL}/api/users/register`

export const registerUser = async (user) => {
    try{
    const {data} = await axios.post(baseURL, user)
    return data
    }
    catch(error){
        console.log(error.message)
    }
}