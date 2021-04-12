import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {

    const [grading, setGrading] = useState(false)

    const handleGradeClicked = (e) => {

    }

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
                    question={question}/>
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