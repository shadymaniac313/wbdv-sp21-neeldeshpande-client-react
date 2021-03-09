import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CourseManager from "./components/course-manager/course-manager";
import Home from "./components/home";
import React from "react";

function App() {
    return (
        <div>
            <Router>
                <div className="container-fluid">
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/courses" component={CourseManager}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
