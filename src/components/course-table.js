import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <table>
                <thead>
                <th>
                    <td>
                        Title
                    </td>
                    <td>
                        Owned By
                    </td>
                    <td>
                        Last Modified
                    </td>
                    <td>
                        Action
                    </td>
                </th>
                </thead>
                <tbody>
                {
                    this.props.courses.map(course =>
                        <CourseRow/>
                    )
                }
                </tbody>
            </table>
        )
    }
}