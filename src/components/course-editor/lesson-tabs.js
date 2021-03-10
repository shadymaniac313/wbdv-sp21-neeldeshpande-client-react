import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router";
import lessonService from "../../services/lesson-service"

const LessonTabs = ({
                        lessons = [],
                        findLessonsForModule = (moduleId) => console.log(moduleId),
                        createLesson,
                        updateLesson,
                        deleteLesson
                    }) => {
    const {courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [moduleId])

    return (
        <ul className="nav nav-tabs wbdv-editor-lesson-tabs">
            {
                lessons.map(lesson =>
                    <li className={`nav-item ${lesson._id === lessonId ? 'active' : ''}`}>
                        <EditableItem
                            key={lesson._id}
                            active={lesson._id === lessonId}
                            to={`/courses/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            item={lesson}
                            updateItem={updateLesson}
                            deleteItem={deleteLesson}
                        />
                    </li>
                )
            }
            <li>
                <i onClick={() => createLesson(moduleId)}
                   className="wbdv-editor-lesson-tabs-add pull-right fas fa-plus"/>
            </li>
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
        },
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(createdLesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson: createdLesson
                }))
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                }))
        },
        deleteLesson: (lesson) =>
            lessonService.deleteLesson(lesson._id)
                .then(status => {
                    dispatch({
                        type: "DELETE_LESSON",
                        lessonToDelete: lesson
                    })
                    dispatch({
                        type: "FIND_TOPICS_FOR_LESSON",
                        topics: []
                    })
                })

    }
}

export default connect(stpm, dtpm)(LessonTabs)