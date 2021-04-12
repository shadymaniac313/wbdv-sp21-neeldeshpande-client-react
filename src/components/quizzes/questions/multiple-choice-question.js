import React, {useState} from "react";

const MultipleChoiceQuestion = ({question, grading}) => {

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

            <div className={"container-fluid"}>
                <div className={"list-group question-body row"}>
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
                                    <input
                                        type="radio"
                                        name={question._id}
                                        onClick={() => {
                                            setAnswer(choice)
                                        }}
                                        value={choice}
                                    />
                                    {choice}
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