import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {

    const [grading, setGrading] = useState(false)

    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    grading={grading}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    grading={grading}
                />
            }
            <button
                onClick={() => setGrading(!grading)}
                className={"btn btn-success btn-block"}
            >Grade
            </button>
        </div>
    )
}

export default Question;