import React from 'react'
import CourseRow from "./course-row";

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
                    <th className={"wbdv-hide-on-minimize"}>
                        Owned By
                    </th>
                    <th className={"wbdv-hide-on-minimize"}>
                        Last Modified
                    </th>
                    <th>
                        <div className="row">
                            <div className="col-6">
                                <i className="fa fa-sort"/>
                            </div>
                            <div className="col-6">
                                <i className="fa fa-th"/>
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