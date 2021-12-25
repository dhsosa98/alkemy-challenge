import axios from "axios"

const baseUrl = 'http://localhost:4000/users/'

export const registerUser = async (user) => {
    try{
    const {data} = await axios.post(baseUrl, user)
    return data
    }
    catch(error){
        console.log(error.message)
    }
}