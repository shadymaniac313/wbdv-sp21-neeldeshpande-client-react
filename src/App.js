import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
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
                    <Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
