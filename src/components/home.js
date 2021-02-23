import React from 'react'
import CourseManager from "./course-manager/course-manager";
import {BrowserRouter, Route, Link} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <div className="list-group">
                    <Link to="/courses/table" className="list-group-item">
                        Courses Table
                    </Link>
                    <Link to="/courses/grid" className="list-group-item">
                        Courses Grid
                    </Link>
                    <Link to="/editor" className="list-group-item">
                        Course Editor
                    </Link>
                </div>
            </div>
        )
    }
}