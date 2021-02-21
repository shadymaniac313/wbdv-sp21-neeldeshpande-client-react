import React from 'react'
import CourseTable from "./course-table";
import CourseRow from "./course-row";
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

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <CourseTable courses={this.state.courses}
                                 title={"test"}
                                 deleteCourse={this.deleteCourse}
                    />
                </div>
            </div>
        )
    }
}