import "./App.css";
import Nav from "./components/nav";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Student from "./components/student";
import UpdateStudent from "./components/updatestudent";
import AddStudent from "./components/addstudent";
import Cart from "./components/cart";
import Logout from "./components/logout";
import PageNotFound from "./components/pagenotfound";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={AddStudent} />
        <Route path="/cart" component={Cart} />
        <Route path="/students/update/:rollNo" component={UpdateStudent} />
        <Route path="/students/add" component={AddStudent} />
        <Route path="/students" component={Student} />
        <Route path="/logout" component={Logout} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
