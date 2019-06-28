import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Books from "./components/Books/Books";
import LandingPage from "./components/Landing";
import Handouts from "./components/Handouts/Handouts";
import Magazines from "./components/Magazines";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Details from "./components/Details";
import Default from "./components/Default";
import Auth from "./components/Auth.jsx";
import Account from "./components/Account";
import Process from "./components/Process";
import { ProductConsumer } from "./context";
// import Admin from "./components/Admin";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Books" component={Books} />
        <Route path="/Handouts" component={Handouts} />
        <Route path="/Magazines" component={Magazines} />
        <Route path="/Details" component={Details} />
        <Route path="/Auth" component={Auth} />
        <Route path="/Process" component={Process} />
        <Route path="/Registration" component={Registration} />
        <ProductConsumer>
          {value => {
            return (
              <React.Fragment>
                <Route
                  path="/Account"
                  render={() =>
                    value.loggedin ? <Account /> : <Redirect to="/Auth" />
                  }
                />
              </React.Fragment>
            );
          }}
        </ProductConsumer>
        <Route component={Default} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
