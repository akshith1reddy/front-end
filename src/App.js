import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import "font-awesome/css/font-awesome.css";
import Navbar from "react-bootstrap/Navbar";



const App = () => {
  const checkForAuthToken = (Component) => {
    const user_auth_token = sessionStorage.getItem("user_auth_token");
    return user_auth_token ? (
      <Component user_name={user_auth_token} />
    ) : (
      <Redirect to="/login" />
    );
  };
  return (
      <div className="App">
        <Navbar className="text-light d-flex justify-content-center" variant="dark">
          <Navbar.Brand><h1>Retail Web Application</h1></Navbar.Brand>
        </Navbar>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route
          exact
          path="/home"
          render={() => checkForAuthToken(HomePage)}
        ></Route>
        <Route path="/home/*">
          <HomePage />
        </Route>
      </Switch>
    </Router>
      </div>
  );
};

export default App;
