import React, {useEffect, useState} from "react";

const TrueFalseQuestion = ({question, grading, updateAnswerForQuestion}) => {

    const [answer, setAnswer] = useState(null)
    const [trueSelected, setTrueSelected] = useState(false)
    const [falseSelected, setFalseSelected] = useState(false)

    return (
        <div>
            <h4>
                <div className={"row"}>
                    <div className={"col"}>
                        {question.question}
                    </div>
                    <div className={"col"}>
                        {
                            JSON.stringify(answer) === question.correct &&
                            grading &&
                            <i className="fas fa-check float-right icon-correct"/>
                        }
                        {
                            JSON.stringify(answer) !== question.correct &&
                            answer !== null &&
                            grading &&
                            <i className="fas fa-times float-right icon-incorrect"/>
                        }
                    </div>
                </div>
            </h4>

            <div>
                <div className={"list-group"}>
                    <div
                        className={
                            "list-group-item question-option " +
                            (answer == null ? "question-option-unselected " : "") +
                            (grading ?
                                    (JSON.parse(question.correct) === true ? "question-option-correct"
                                            : (trueSelected ? "question-option-incorrect" : "")
                                    )
                                    : ""
                            )
                        }>
                        <div className={"row"}>
                            <div className={"col"}>
                                <input
                                    type="radio"
                                    onClick={() => {
                                        updateAnswerForQuestion(question.question, "true")
                                        setTrueSelected(true)
                                        setFalseSelected(false)
                                        setAnswer(true)
                                    }}
                                    value={true}
                                    name={question._id}/>
                                true
                            </div>
                            <div className={"col"}>
                                {
                                    grading &&
                                    answer !== null &&
                                    ((question.correct === JSON.stringify(true) && trueSelected) ||
                                        (question.correct === JSON.stringify(true) && falseSelected)) &&
                                    <i className={"fas fa-check float-right icon-correct-bright"}/>
                                }
                                {
                                    grading &&
                                    answer != null &&
                                    question.correct !== JSON.stringify(true) && trueSelected &&
                                    <i className={"fas fa-times float-right icon-incorrect"}/>
                                }

                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            "list-group-item question-option " +
                            (answer == null ? "question-option-unselected" : "") +
                            (grading ? (JSON.parse(question.correct) === false ? "question-option-correct"
                                        : (falseSelected ? "question-option-incorrect" : "")
                                    )
                                    : ""
                            )
                        }>
                        <div className={"row"}>
                            <div className={"col"}>
                                <label><input
                                    type="radio"
                                    onClick={() => {
                                        updateAnswerForQuestion(question.question, "false")
                                        setFalseSelected(true)
                                        setTrueSelected(false)
                                        setAnswer(false)
                                    }}
                                    value={false}
                                    name={question._id}/>
                                    false
                                </label>
                            </div>
                            <div className={"col"}>
                                {
                                    grading &&
                                    answer !== null &&
                                    ((question.correct === JSON.stringify(false) && falseSelected) ||
                                        (question.correct === JSON.stringify(false) && trueSelected)) &&
                                    <i className={"fas fa-check float-right icon-correct-bright"}/>
                                }
                                {
                                    grading &&
                                    answer != null &&
                                    question.correct !== JSON.stringify(false) && falseSelected &&
                                    <i className={"fas fa-times float-right icon-incorrect"}/>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    {answer !== null && <>Your answer: {JSON.stringify(answer)}</>}
                </div>
            </div>
        </div>
    )
}

export default TrueFalseQuestion