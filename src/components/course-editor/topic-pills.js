import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router";
import topicService from "../../services/topic-service"

const TopicPills = ({
                        topics = [],
                        findTopicsForLesson = (lessonId) => console.log(lessonId),
                        createTopic,
                        updateTopic,
                        deleteTopic
                    }) => {
    const {courseId, moduleId, lessonId, topicId} = useParams()

    console.log("testtttttttttttt")
    console.log(courseId)
    console.log(moduleId)
    console.log(lessonId)
    console.log(topicId)

    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [moduleId, lessonId])

    return (
        <ul className="nav nav-pills wbdv-editor-nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            key={topic._id}
                            active={topic._id === topicId}
                            tp={`/courses/edit/${courseId}/module/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            item={topic}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                        />
                    </li>
                )
            }
            <li>
                <i onClick={() => createTopic(topicId)}
                   className="wbdv-editor-lesson-tabs-add pull-right fas fa-plus"/>
            </li>
        </ul>
    )
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(fetchedTopics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: fetchedTopics
                }))
        },
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(createdTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: createdTopic
                }))
        },
        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                }))
        },
        deleteTopic: (topic) =>
            topicService.deleteTopic(topic._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: topic
                }))
    }
}

export default connect(stpm, dtpm)(TopicPills)