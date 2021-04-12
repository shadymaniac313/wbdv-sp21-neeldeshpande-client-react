import React, {useEffect, useState} from "react";

const TrueFalseQuestion = ({question, grading}) => {
    const [answer, setAnswer] = useState(null)

    useEffect(() => {

    }, [grading])

    return (
        <div>
            <h4>
                {question.question}
                {
                    JSON.stringify(answer) === question.correct &&
                    grading &&
                    <i className="fas fa-check pull-right icon-correct"/>
                }
                {
                    JSON.stringify(answer) !== question.correct &&
                    answer !== null &&
                    grading &&
                    <i className="fas fa-times pull-right icon-incorrect"/>
                }
            </h4>

            <div className={"container-fluid"}>
                <div className={"list-group row"}>
                    <div
                        className={"list-group-item question-option " +
                        (answer == null ? "question-option-unselected " : "")
                        }>
                        <label><input
                            type="radio"
                            onClick={() => setAnswer(true)}
                            name={question._id}/>
                            true
                        </label>
                    </div>
                    <div
                        className={"list-group-item question-option " + (answer == null ? "question-option-unselected" : "")}>
                        <label><input
                            type="radio"
                            onClick={() => setAnswer(false)}
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