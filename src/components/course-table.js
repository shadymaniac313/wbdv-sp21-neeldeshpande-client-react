import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <table className={"table"}>
                <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Owned By
                    </th>
                    <th>
                        Last Modified
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.courses.map(course =>
                        <CourseRow key={course._id}
                                   course={course}
                                   deleteCourse = {this.props.deleteCourse}
                        />
                    )
                }
                </tbody>
            </table>
        )
    }
}