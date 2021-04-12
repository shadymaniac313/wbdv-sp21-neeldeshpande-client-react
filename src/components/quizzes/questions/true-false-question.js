import React, {useEffect, useState} from "react";

const TrueFalseQuestion = ({question, grading}) => {

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

            <div className={"container-fluid"}>
                <div className={"list-group row"}>
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
                        <label><input
                            type="radio"
                            onClick={() => {
                                setTrueSelected(true)
                                setFalseSelected(false)
                                setAnswer(true)
                            }}
                            name={question._id}/>
                            true
                        </label>
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
                        <label><input
                            type="radio"
                            onClick={() => {
                                setFalseSelected(true)
                                setTrueSelected(false)
                                setAnswer(false)
                            }}

                            name={question._id}/>
                            false
                        </label>
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