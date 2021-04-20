const QUIZZES_URL = 'http://shrouded-gorge-32031.herokuapp.com/api/quizzes'

const findQuestionsForQuiz = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}/questions`)
        .then(response => response.json())
}

export default {
    findQuestionsForQuiz
}