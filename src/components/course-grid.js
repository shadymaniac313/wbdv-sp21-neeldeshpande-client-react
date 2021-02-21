import React from 'react'
import {Link} from "react-router-dom";
import {CourseCard} from "./course-card";
import "../styles/course-manager.style.client.css"

const CourseGrid = ({courses}) =>
    <div className={"wbdv-course-grid"}>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"/>
        </Link>
        <div className="row">
            {
                console.log(courses)
            }
            {
                courses.map(course =>
                    <CourseCard key={course._id}
                                course={course}/>
                )
            }

        </div>

    </div>

export default CourseGrid