const FormUser = ( { onSubmit, setUsername, setPassword } ) => {
    return (
        <form onSubmit={onSubmit} >
            <label>Username: </label>
            <input onChange={(e)=> setUsername(e.target.value)} />

            <label>Password: </label>
            <input onChange={(e)=> setPassword(e.target.value)} />
            <button>Send</button>
        </form>
    )
}

export default FormUser