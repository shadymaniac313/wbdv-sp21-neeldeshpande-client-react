import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManager from "./components/course-manager";
import Home from "./components/home";
import React from "react";

// import {Route} from 'react-router-dom/Route';

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="container-fluid">
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/courses" component={CourseManager}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
