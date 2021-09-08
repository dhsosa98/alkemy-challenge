import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App()  {
    const user = sessionStorage.getItem('user')
    const token = sessionStorage.getItem('token')
    return (
        <Router>
            <Switch>
            <Route exact path='/' component={()=> {
            if (token) {
                return <Home user={user} />
            }
            return (<Redirect to='/login' />)
            }} />
            <Route path='/login' component={()=> {
            if (!token) {
                return <Login />
            }
            return (<Redirect to='/' />)
            }} />
            <Route path='/register' component={()=> {
            if (!token) {
                return <Register />
            }
            return (<Redirect to='/' />)
            }} />
            </Switch>     
        </Router>
    )   
}

