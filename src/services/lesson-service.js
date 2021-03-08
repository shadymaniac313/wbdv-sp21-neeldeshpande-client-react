const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001327792/modules";

const createLessonForModule = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())

const findLesson = (lessonId) =>
    fetch(`${MODULES_URL}/lessons/${lessonId}`)
        .then(response => response.json())

const updateLesson = (lessonId, lesson) =>
    fetch(`${MODULES_URL}/lessons/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


const deleteLesson = (lessonId) =>
    fetch(`${MODULES_URL}/lessons/${lessonId}`, {
        method: "DELETE"
    }).then(response => response.json())

const api = {
    findLessonsForModule: findLessonsForModule,
    createLessonForModule: createLessonForModule,
    findLesson: findLesson,
    updateLesson: updateLesson,
    deleteLesson: deleteLesson
}

export default api