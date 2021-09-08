import { useState } from 'react'
import FormUser from '../../components/FormUser'
import { getUser } from '../../services/login'
import { useHistory } from 'react-router-dom'


const Login = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const history = useHistory()

    const handleLoginUser = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            password: password
          }
        getUser(user, history)
    }

   
    return (
        <FormUser onSubmit={handleLoginUser} setUsername={setUsername} setPassword={setPassword} />
    )
}

export default Login