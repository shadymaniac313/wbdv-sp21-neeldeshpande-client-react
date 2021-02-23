import React, {useState} from 'react'
import '../../styles/course-manager.style.client.css'
import {Link} from "react-router-dom";

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
            <td className={"wbdv-course-table-title"}>
                {
                    !editing &&
                        <Link to={"/editor"}>
                            {
                                course.title
                            }
                        </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td className={"wbdv-hide-on-minimize-s wbdv-course-table-ownedby"}>
                {course.owner}
            </td>
            <td className={"wbdv-hide-on-minimize-s wbdv-hide-on-minimize-m wbdv-course-table-lastModified"}>
                {course.lastModified}
            </td>
            <td className={"wbdv-course-table-action"}>
                <div className={"row"}>
                    <div className="col-6">
                        {
                            editing &&
                            <button onClick={() => saveCourse()} className="fas fa-check wbdv-btn-nobackground"/>
                        }

                        {
                            !editing &&
                            <button onClick={() => setEditing(true)} className="fas fa-edit wbdv-btn-nobackground"/>
                        }
                    </div>
                    <div className="col-6">
                        {
                            editing &&
                            <button onClick={() => deleteCourse(course)} className="fa fa-trash wbdv-btn-nobackground"/>
                        }
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default CourseRow