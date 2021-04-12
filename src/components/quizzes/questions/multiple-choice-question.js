import React from "react";

const MultipleChoiceQuestion = ({question}) => {
    return (
        <div>
            <h4>{question.question}</h4>
            {question.correct}
            <div className={"list-group question-body"}>
                {
                    question.choices.map((choice) => {
                        return (
                            <label className={"list-group-item question-option question-option-unselected"}>
                                <input type="radio" name={question._id}/>
                                {choice}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion