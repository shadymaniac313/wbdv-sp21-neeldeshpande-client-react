import React from "react";
import {Link} from "react-router-dom";

export const CourseCard = (course) => {
    return(
        <div className="card" style={{width: "18rem", margin: "15px"}}>
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{"hi"+course.owner}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <Link to="/editor" className="btn btn-primary">
                    {course.title}
                </Link>
            </div>
        </div>
    )
}