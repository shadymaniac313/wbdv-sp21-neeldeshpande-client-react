import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import Question from "./questions/question";
import questionService from "../../services/questions-service"
import quizService from "../../services/quizzes-service"

const Quiz = () => {
    const {courseId, quizId} = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((fetchedQuestions) => {
                    setQuestions(fetchedQuestions.map(question => ({...question, answer: ""})))
                }
            )
    }, [])

    const updateAnswerForQuestion = (question, choice) => {
        setQuestions(questions.map(q => q.question === question ? {...q, answer: choice} : q ))
    }

    const handleSubmitQuiz = () => {
        quizService.submitQuiz(quizId, questions)
    }

    return (
        <div>
            <h2 className={"wbdv-sticky-top-quiz"}>Quiz {quizId}</h2>
            <div className={"container-fluid quiz-content"}>
                <ul className={"list-group"}>
                    {
                        questions.map(question =>
                            <li className={'list-group-item question'}>
                                <Question
                                    question={question}
                                    handleSubmitQuiz={handleSubmitQuiz}
                                    updateAnswerForQuestion = {updateAnswerForQuestion}
                                />
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Quiz