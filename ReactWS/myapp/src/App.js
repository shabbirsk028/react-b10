import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
import Student from "./components/student";
import UpdateStudent from "./components/updatestudent";
import AddStudent from "./components/addstudent";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/students/update/:rollNo" component={UpdateStudent} />
        <Route path="/students/add" component={AddStudent} />
        <Route path="/students" component={Student} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
