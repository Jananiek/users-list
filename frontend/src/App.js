import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListViewTable from "./components/ListViewTable";
import SingleView from "./components/SingleView";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function listView() {
  return (
    <div className="container">
      <div className="page-title">
        <h3>User Profile details</h3>
      </div>
      <div className="row">
        <ListViewTable />
      </div>
    </div>
  );
}
function singleUserView({ match }) {
  console.log(match);
  return (
    <div className="container">
      <SingleView {...match} />
    </div>
  );
}
function App() {
  return (
    <Router>
      <Route path="/user/:id" component={singleUserView} />
      <Route path="/" exact component={listView} />
    </Router>
  );
}

export default App;
