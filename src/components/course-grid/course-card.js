import React, {useState} from "react";
import {Link} from "react-router-dom";

export const CourseCard = ({
                               course,
                               updateCourse,
                               deleteCourse
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
        <div className="card" style={{width: "18rem", margin: "15px"}}>
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top"
                 alt="..."/>
            <div className="card-body">
                {
                    !editing &&
                    <h5>{course.title}</h5>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <Link to="/editor" className="btn btn-primary">
                            {"View"}
                        </Link>
                    </div>
                    <div className={"col"}>
                        {
                            editing &&
                            <button onClick={() => saveCourse()} className="fas fa-check wbdv-btn-nobackground"/>
                        }

                        {
                            !editing &&
                            <button onClick={() => setEditing(true)} className="fas fa-2x fa-edit wbdv-btn-nobackground float-right"/>
                        }
                        {
                            editing &&
                            <button onClick={() => deleteCourse(course)} className="fa fa-trash wbdv-btn-nobackground"/>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}