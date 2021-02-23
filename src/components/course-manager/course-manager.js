import React from 'react'
import CourseTable from "../course-table/course-table";
import courseService from "../../services/course-service"
import '../../styles/course-manager.style.client.css'
import CourseStickyTop from "./course-manager-sticky-top";
import CourseGrid from "./course-grid/course-grid";
import {Route} from "react-router";

export default class CourseManager extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    addCourse = (course) => {
        courseService.createCourse(course)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if (c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    render() {
        return (
            <div>
                <div className={"row"}>
                    <CourseStickyTop courses={this.state.courses}
                                     addCourse={this.addCourse}
                    />
                </div>

                <Route path={"/courses/table"} exact={true}>
                    <div className={"container wbdv-course-table"}>
                        <div className={"row"}>
                            <CourseTable courses={this.state.courses}
                                         deleteCourse={this.deleteCourse}
                                         updateCourse={this.updateCourse}
                            />
                        </div>
                    </div>
                </Route>
                <Route path={"/courses/grid"} exact={true}>
                    <div className={"container wbdv-course-grid"}>
                        <CourseGrid courses={this.state.courses}
                                    title={"test"}
                                    updateCourse={this.updateCourse}
                                    deleteCourse = {this.deleteCourse}
                        />
                    </div>
                </Route>
                <a href="#" className={"float"}>
                    <i className={"fa fa-plus wbdv-add-icon-float fa-2x"}/>
                </a>
            </div>
        )
    }
}