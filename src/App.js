import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Books from "./components/Books";
import LandingPage from "./components/Landing";
import Handouts from "./components/Handouts";
import Magazines from "./components/Magazines";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/Books" component={Books} />
        <Route path="/Handouts" component={Handouts} />
        <Route path="/Magazines" component={Magazines} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
