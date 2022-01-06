import FormUserResetPass from "../../components/FormUserResetPass"
import { resetPassword } from "../../services/resetPassword"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import ModalWindow from "../../components/ModalWindow"

const ResetPass = () =>{
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [passwordRepeated, setPasswordRepeated] = useState('')
        const modalText = "User updated successfully"
        const [open, setOpen] = useState(false)
        const [error, setError] = useState('')  
        const history = useHistory()

    const handleResetPass = async (e) => {
        try{
            e.preventDefault() 
            if (password === passwordRepeated){
            const user = {
                username: username,
                password: password,
            }
            const {data} = await resetPassword(user)
            if (!data.errors){    
                setOpen(true) 
            }
            else{
                setError(data.errors)
            }
            }
            else{
                setError("The passwords must be the sames")
            }
        }
        catch{
            console.log("error")
        }  
    }

    const handleConfirm = () => {
        setOpen(false)
        history.push("/login")
    }
    return (
        <>
        <FormUserResetPass 
        onSubmit={handleResetPass} 
        setUsername={setUsername} 
        setPassword={setPassword} 
        setPasswordRepeated={setPasswordRepeated}
        error={error} 
        setError={setError} />
        <ModalWindow modalText={modalText} open={open} setOpen={open} handleConfirm={handleConfirm} type="confirm"/>
        </>
    )
} 

export default ResetPass;