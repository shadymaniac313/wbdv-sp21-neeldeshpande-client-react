import React from 'react'

const CourseRow = ({
                       course,
                       deleteCourse
                   }) => {
    console.log(course)
    return (
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
                <div className={"row"}>
                    <div className="col-6">
                        <button className="fa fa-check"/>
                    </div>
                    <div className="col-6">
                        <button onClick={() => deleteCourse(course)} className="fa fa-trash"/>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default CourseRow