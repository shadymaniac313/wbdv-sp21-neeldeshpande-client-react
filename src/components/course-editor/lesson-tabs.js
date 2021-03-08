import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router";
import lessonService from "../../services/lesson-service"

const LessonTabs = ({
                        lessons = [],
                        findLessonsForModule = (moduleId) => console.log(moduleId),
                        createLessonForModule
                    }) => {
    const {courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [moduleId])

    return (
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            key={lesson._id}
                            active={lesson._id === lessonId}
                            to={`/courses/edit/${courseId}/module/${moduleId}/lessons/${lesson._id}`}
                            item={lesson}/>
                    </li>
                )
            }
        </ul>
    )

}

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(fetchedLessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: fetchedLessons
                }))
        }
    }
}

export default connect(stpm, dtpm)(LessonTabs)