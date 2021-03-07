import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import Home from "./components/home";
import React from "react";

// import {Route} from 'react-router-dom/Route';

function App() {
    return (
        <div>
            <Router>
                <div className="container-fluid">
                    <Route path="/" exact={true} component={Home}/>
                    {/*<Route path="courses/:layout/edit/:courseId"*/}
                    {/*       render={(props) => <CourseEditor {...props}/>}/>*/}
                    <Route path="/courses" component={CourseManager}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
