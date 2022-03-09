import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPass from "./pages/Reset-pass";
import { QueriesProvider } from "./QueriesContext";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

export default function App() {
  return (
    <Router>
      <QueriesProvider>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/reset-password" component={ResetPass} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </QueriesProvider>
    </Router>
  );
}
