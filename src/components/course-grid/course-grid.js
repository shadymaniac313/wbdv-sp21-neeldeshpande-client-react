import React from 'react'
import {Link} from "react-router-dom";
import {CourseCard} from "./course-card";
import "../../styles/course-manager.style.client.css"

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div className={"wbdv-course-grid"}>
        <div className={"row"}>
            <div className={"col-6"}>
                <h6>Recent Documents</h6>
            </div>
            <div className={"col-4"}>
                <h6>Owned by me</h6>
            </div>
            <div className={"col-2"}>
                <Link to="/courses/table" className={"float=right"}>
                    <button className="fas fa-list float-right wbdv-btn-nobackground"/>
                </Link>
            </div>
        </div>
        <hr/>
        <div className="row wbdv-course-grid-content">
            {
                courses.map(course =>
                    <CourseCard key={course._id}
                                course={course}
                                updateCourse={updateCourse}
                                deleteCourse={deleteCourse}
                    />
                )
            }

        </div>

    </div>

export default CourseGrid