import FormUser from '../../components/FormUser'
import { useState } from 'react'
import { useHistory } from "react-router"
import { registerUser } from '../../services/register'

const Register = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const history = useHistory()

const handleRegisterUser = (e) => {
    e.preventDefault()
    const user = { username, password }
    registerUser(history, user)
}

    return (
        <FormUser onSubmit={handleRegisterUser} setUsername={setUsername} setPassword={setPassword} />
    )
}

export default Register