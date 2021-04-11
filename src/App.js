import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CourseManager from "./components/course-manager/course-manager";
import Home from "./components/home";
import Quiz from "./components/quizzes/Quiz";
import QuizList from "./components/quizzes/QuizList";
import React from "react";

function App() {
    return (
        <div>
            <Router>
                <div className="container-fluid">
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/courses" component={CourseManager}/>
                    <Route path="/courses/:courseId/quizzes" exact={true}>
                        <QuizList/>
                    </Route>
                    <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                        <Quiz/>
                    </Route>
                </div>
            </Router>
        </div>
    );
}

export default App;
