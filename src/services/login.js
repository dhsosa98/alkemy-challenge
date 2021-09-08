import axios from 'axios'

const baseUrl = 'http://localhost:4000/users/login'

export const getUser = (credentials, history) => {
    axios.post(baseUrl, credentials).then(res => {
        if (res.data.data.status) {
              const token = 'Bearer ' + res.data.data.token
              console.log(res.data.data)
              sessionStorage.setItem('token', token)
              sessionStorage.setItem('user', credentials.username)
              history.push('/')
        }
        else{
            alert(res.data.data.errors)
        }
    })
}