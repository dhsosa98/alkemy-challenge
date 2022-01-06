import { useState, useContext} from 'react'
import FormUserLogin from '../../components/FormUserLogin'
import { getUser } from '../../services/login'
import { useHistory} from 'react-router-dom'
import { AuthContext } from '../../AuthContext'


const Login = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(false)
const history = useHistory()
const {signin} = useContext(AuthContext)

    const handleLoginUser = async (e) => {
        try{
            e.preventDefault() 
            const user = {
                username: username,
                password: password
            }
            const {data} = await getUser(user)
            if (data.token){    
                signin(data)
                history.push("/")
            }
            else{
                setError(data.errors)
            }
        }
        catch{
            console.log("error")
        }  
    }

   
    return (
        <FormUserLogin onSubmit={handleLoginUser} setUsername={setUsername} setPassword={setPassword} error={error} setError={setError} />
    )
}

export default Login