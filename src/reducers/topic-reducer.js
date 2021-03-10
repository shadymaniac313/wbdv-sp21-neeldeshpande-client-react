const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "FIND_TOPIC":
            return {
                topic: action.topic
            }
        case "CREATE_TOPIC":
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(topic => {
                    return topic._id === action.topic._id ? action.topic : topic
                })
            }
        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => {
                    return topic._id !== action.topicToDelete._id;
                })
            }
        default:
            return state
    }
}

export default topicReducer