import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Edit from "./pages/Edit";
import Users from "./pages/Users";
import Index from "./pages/Index";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Switch>
        <Route path="/users/:id">
          <Edit />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
