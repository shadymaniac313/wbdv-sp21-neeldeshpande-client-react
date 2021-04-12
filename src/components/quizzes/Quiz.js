import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import Question from "./questions/question";
import questionService from "../../services/questions-service"

const Quiz = () => {
    const {courseId, quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((fetchedQuestions) =>
                setQuestions(fetchedQuestions)
            )
    }, [])

    return (
        <div className={"container-fluid"}>
            <h2>Quiz {quizId}</h2>
            <ul className={"list-group"}>
                {
                    questions.map(question =>
                        <li className={'list-group-item question'}>
                            <Question question={question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz