import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./screens/HomePage";
import Login from "./screens/login";
import NavBar from "./screens/NavBar";
import Patients from "./screens/Patients";
import AddPatient from "./screens/AddPatient";
import Reports from "./screens/Reports";
import Upload from "./screens/Upload";
import { CssBaseline } from "@material-ui/core";
import Stat from "./screens/Stat";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Switch>
        <Route path="/patients/reports/:id" component={Reports} />
        <Route path="/patients/upload/:id" component={Upload} />
        <Route path="/add" component={AddPatient} />
        <Route path="/stats" component={Stat} />
        <Route path="/patients" component={Patients} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
