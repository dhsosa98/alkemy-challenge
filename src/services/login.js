import axios from 'axios'

const baseUrl = 'http://localhost:4000/users/login'

export const getUser = async (credentials) => {
    try{
    const {data} = await axios.post(baseUrl, credentials)
    return data
    }
    catch(error){
        console.log(error)
    }
}