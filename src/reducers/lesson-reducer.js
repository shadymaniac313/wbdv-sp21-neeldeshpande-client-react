const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "CREATE_LESSON":
            return {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return lesson
                    }
                })
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => {
                    return lesson._id !== action.lessonToDelete._id;
                })
            }
        default:
            return state
    }
}

export default lessonReducer