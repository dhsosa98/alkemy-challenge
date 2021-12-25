import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {AuthContext} from './AuthContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App()  {
    const {isAuth} = useContext(AuthContext)
    return (
        <Router>
            <Switch>
            {!isAuth ?
            <> 
            <Route path="/" component={()=><Redirect to="/login"/>} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            </>
            :
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={()=><Redirect to="/"/>} />
                <Route exact path="/register" component={()=><Redirect to="/"/>} />
            </Layout>}
            
            </Switch>     
        </Router>
    )   
}

