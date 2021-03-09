import React from 'react'
import CourseTable from "../course-table/course-table";
import courseService from "../../services/course-service"
import '../../styles/course-manager.style.client.css'
import CourseStickyTop from "./course-manager-sticky-top";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Route} from "react-router";

export default class CourseManager extends React.Component {
    state = {
        courses: [],
        searchValue: ''
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
        this.setState((prevState)=>({
            ...prevState,
            searchValue: ''
        }))
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

    setSearchValue = (value) => {
        this.setState((prevState)=> ({
            ...prevState,
            searchValue: value
        }))
    }

    render() {
        return (
            <div>
                <div className={"row"}>
                    <CourseStickyTop courses={this.state.courses}
                                     addCourse={this.addCourse}
                                     setSearchValue={this.setSearchValue}
                                     searchValue={this.state.searchValue}
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
                                    deleteCourse={this.deleteCourse}
                        />
                    </div>
                </Route>
                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/edit/:courseId/module/:moduleId",
                    "/courses/edit/:courseId/module/:moduleId/lesson/:lessonId",
                    "/courses/edit/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
                <a href="#" className={"float"}>
                    <i className={"fa fa-plus wbdv-add-icon-float fa-2x"}
                       onClick={() => this.addCourse({
                           title: this.state.searchValue,
                           owner: "me",
                           lastModified: "1/1/2021"
                       })}
                    />
                </a>
            </div>
        )
    }
}