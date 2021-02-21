import React from 'react'
import CourseTable from "./course-table";
import courseService from "../services/course-service"

export default class CourseManager extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
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
                        if(c._id === course._id) {
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
            <div className={"container"}>
                <div className={"row"}>
                    <CourseTable courses={this.state.courses}
                                 title={"test"}
                                 deleteCourse={this.deleteCourse}
                                 updateCourse={this.updateCourse}
                    />
                </div>
            </div>
        )
    }
}