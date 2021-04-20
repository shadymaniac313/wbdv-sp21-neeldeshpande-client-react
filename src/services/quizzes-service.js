const QUIZZES_URL = 'http://shrouded-gorge-32031.herokuapp.com/api/quizzes';

const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

const findQuizById = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json())
}

const submitQuiz = (quizId, questions) => {

    console.log(JSON.stringify(questions), "stringified body")

    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(questions)
    }).then(response => response.json())
}

export default {
    findAllQuizzes,
    findQuizById,
    submitQuiz
}