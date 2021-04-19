import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({
                      question,
                      handleSubmitQuiz,
                      updateAnswerForQuestion
                  }) => {

    const [grading, setGrading] = useState(false)

    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    grading={grading}
                    updateAnswerForQuestion={updateAnswerForQuestion}

                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    grading={grading}
                    updateAnswerForQuestion = {updateAnswerForQuestion}
                />
            }
            <button
                onClick={() => setGrading(!grading)}
                className={"btn btn-success btn-block"}
            >{grading ? "Hide Grade" : "Grade"}
            </button>
            <button
                className={"btn btn-primary btn-block"}
                onClick={() => handleSubmitQuiz()}
            >Submit
            </button>
        </div>
    )
}

export default Question;