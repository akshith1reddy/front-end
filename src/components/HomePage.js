
import Navbar from "react-bootstrap/Navbar";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "../styles/HomePage.css";
import { useHistory } from "react-router-dom";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";

const HomePage = (props) => {
  const history = useHistory();
  const logOutUser = () => {
    sessionStorage.removeItem("user_auth_token");
    history.push("/login");
  };
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#home">Welcome {props.user_name}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/home/page1">Search on Data Pulls<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/home/page4">Upload new DataSet</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/home/page2">Dashboard</a>
              </li>
            </ul>
          </div>
          <button
              id="logOutButton"
              type="button"
              className="btn btn-secondary"
              onClick={logOutUser}
          >
            Log Out!
          </button>
        </nav>
        <Switch>
          <Route exact path="/home/page1">
            <Page1 userName={props.user_name} />
          </Route>
          <Route exact path="/home/page2">
            <Page2 />
          </Route>
          <Route exact path="/home/page3">
            <Page3 />
          </Route>
          <Route exact path="/home/page4">
            <Page4 userName={props.user_name} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default HomePage;
