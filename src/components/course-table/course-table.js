import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import "../../styles/course-manager.style.client.css"

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <table className={"table"}>
                <thead className={"wbdv-course-list-title-row"}>
                <tr>
                    <th>
                        Title
                    </th>
                    <th className={"wbdv-hide-on-minimize-s"}>
                        Owned By
                    </th>
                    <th className={"wbdv-hide-on-minimize-s wbdv-hide-on-minimize-m"}>
                        Last Modified
                    </th>
                    <th>
                        <div className="row">
                            <div className="col-6">
                                <i className="fa fa-sort"/>
                            </div>
                            <div className="col-6">
                                <Link to="/courses/grid">
                                    <button className="fas fa-th float-right wbdv-btn-nobackground"/>
                                </Link>
                            </div>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.courses.map(course =>
                        <CourseRow key={course._id}
                                   course={course}
                                   deleteCourse = {this.props.deleteCourse}
                                   updateCourse = {this.props.updateCourse}
                        />
                    )
                }
                </tbody>
            </table>
        )
    }
}