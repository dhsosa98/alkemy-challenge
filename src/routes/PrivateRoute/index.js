import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { AuthContext } from "../../AuthContext"
import Layout from "../../components/Layout"

const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuth} = useContext(AuthContext)

    return (
       
            <Route {...rest}> 
                {isAuth ? ( <Layout><Component /></Layout>) : (<Redirect to={{pathname: '/login'}} />) } 
            </Route>
         
    )
}

export default PrivateRoute;