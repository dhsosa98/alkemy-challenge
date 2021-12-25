import { useState } from 'react'
import { useHistory } from "react-router"
import { registerUser } from '../../services/register'
import FormUserRegister from '../../components/FormUserRegister'
import ModalWindow from '../../components/ModalWindow'

const Register = () => {

const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    password: ""
})
const history = useHistory()

const modalText = "User registered successfully"

const [open, setOpen] = useState(false)

const [error, setError] = useState('')

const handleRegisterUser = async (e) => {
    try{
    e.preventDefault()
    const {data} = await registerUser(user)
    if (data){
        setOpen(true) 
    }
    }
    catch(error){
        setError("This username has been used")
    }
    
}

const handleChangeUser = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
    setError('')
    console.log(user)
}

const handleConfirm = () => {
    setOpen(false)
    history.push("/login")
}
    return (
        <>
        <FormUserRegister onSubmit={handleRegisterUser} handleUser={handleChangeUser} error={error}/>
        <ModalWindow modalText={modalText} open={open} setOpen={open} handleConfirm={handleConfirm} type="confirm"/>
        </>
    )
}

export default Register