const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001327792/courses";
const jannunzi = "https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses";

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const findCourseById = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`)
        .then(response => response.json())

export const updateCourse = (id, course) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const api = {
    createCourse: createCourse,
    findAllCourses: findAllCourses,
    findCourseById: findCourseById,
    updateCourse: updateCourse,
    deleteCourse: deleteCourse,
}

export default api;
