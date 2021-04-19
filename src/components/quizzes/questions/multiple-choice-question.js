import React, {useState} from "react";

const MultipleChoiceQuestion = ({question, grading, updateAnswerForQuestion}) => {

    const [answer, setAnswer] = useState(null)

    return (
        <div>
            <h4>
                <div className={"row"}>
                    <div className={"col"}>
                        {question.question}
                    </div>
                    <div className={"col"}>
                        {
                            answer === question.correct &&
                            grading &&
                            <i className="fas fa-check float-right icon-correct"/>
                        }
                        {
                            answer !== question.correct &&
                            answer !== null &&
                            grading &&
                            <i className="fas fa-times float-right icon-incorrect"/>
                        }
                    </div>
                </div>
            </h4>

            <div>
                <div className={"list-group question-body"}>
                    {
                        question.choices.map((choice) => {
                            return (
                                <label className={"list-group-item question-option " +
                                (answer == null ? "question-option-unselected" : "") +
                                (grading ? (question.correct === choice ? "question-option-correct"
                                            : (choice === answer ? "question-option-incorrect" : "")
                                        )
                                        : ""
                                )}>
                                    <div className={"row"}>

                                        <div className={"col"}>
                                            <input
                                                type="radio"
                                                name={question._id}
                                                onClick={() => {
                                                    updateAnswerForQuestion(question.question, choice)
                                                    setAnswer(choice)
                                                }}
                                                value={choice}
                                            />
                                            {choice}
                                        </div>
                                        <div className={"col"}>
                                            {
                                                grading &&
                                                answer !== null &&
                                                question.correct === choice &&
                                                <i className={"fas fa-check float-right icon-correct-bright"}/>
                                            }
                                            {
                                                grading &&
                                                answer != null &&
                                                <i className={"fas fa-times float-right icon-incorrect " +
                                                (((answer !== choice) || (answer === choice && choice === question.correct)) ?
                                                    "invisible" : "")
                                                }
                                                />
                                            }

                                        </div>
                                    </div>

                                </label>
                            )
                        })
                    }
                </div>
                <div className={"row"}>
                    {answer !== null && <>Your answer: {JSON.stringify(answer)}</>}
                </div>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion