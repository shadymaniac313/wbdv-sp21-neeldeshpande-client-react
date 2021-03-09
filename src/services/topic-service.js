const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001327792/lessons";
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/001327792/topics";

const createTopic = (lessonId, topic) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`)
        .then(response => response.json())

const findTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`)
        .then(response => response.json())

const updateTopic = (topicId, topic) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const deleteTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "DELETE"
    }).then(response => response.json())

const api = {
    findTopicsForLesson: findTopicsForLesson,
    createTopic: createTopic,
    findTopic: findTopic,
    updateTopic: updateTopic,
    deleteTopic: deleteTopic
}

export default api