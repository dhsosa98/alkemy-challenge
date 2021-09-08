import axios from "axios"

const baseUrl = 'http://localhost:4000/users/'

export const registerUser = (history ,user) => {
    axios.post(baseUrl, user).then(history.push('/login'))
    }