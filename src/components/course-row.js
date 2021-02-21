import React from 'react'

const CourseRow = ({course, title}) => {
    console.log(course)
    return(
        <tr>
            <td>
                {course.title}
            </td>
            <td>
                {course.owner}
            </td>
            <td>
                {course.lastModified}
            </td>
            <td>
                Action
            </td>
        </tr>
    )
}

export default CourseRow