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

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <CourseTable courses={this.state.courses}/>
                </div>
            </div>
        )
    }
}