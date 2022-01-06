import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { AuthContext } from "../../AuthContext"

const PublicRoute = ({component: Component, ...rest}) => {
    const {isAuth} = useContext(AuthContext)

    return (
        <Route {...rest}> 
            {!isAuth ? (<Component />) : (<Redirect to={{pathname: '/'}} />) }
        </Route>
    )
}

export default PublicRoute;