import React, {useState} from 'react'
import '../styles/course-manager.style.client.css'

const CourseRow = ({
                       course,
                       deleteCourse,
                       updateCourse
                   }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    course.title
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td className={".wbdv-hide-on-minimize"}>
                {course.owner}
            </td>
            <td className={".wbdv-hide-on-minimize"}>
                {course.lastModified}
            </td>
            <td>
                <div className={"row"}>
                    <div className="col-6">
                        {
                            editing &&
                            <button onClick={() => saveCourse()} className="fas fa-check"/>
                        }

                        {
                            !editing &&
                            <button onClick={() => setEditing(true)} className="fas fa-edit"/>
                        }
                    </div>
                    <div className="col-6">
                        {
                            editing &&
                            <button onClick={() => deleteCourse(course)} className="fa fa-trash"/>
                        }
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default CourseRow