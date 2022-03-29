import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"

function AppTwo() {
  return (
    <h1>It is the seconf app</h1>
  )
}

const [, , light] = ["boots", "tent", "hedlamp"];
console.log(light);

ReactDOM.render(
  // React.createElement("h1",{style:{color:"blue"}}, "Hellow"),
  // <ul>
  //   <li>Monday</li>
  //   <li>Tuesday</li>
  //   <li>Wednesday</li>
  //   </ul>,
  <Router>
    <React.Fragment>
      <App authorized={false} login="wayneeseguin" /><AppTwo />
    </React.Fragment>
  </Router>
  ,
  document.getElementById('root')
);

