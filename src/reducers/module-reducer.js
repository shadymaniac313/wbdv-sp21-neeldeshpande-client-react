const initialState = {
    modules: [
        {_id: 123, title: ""}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        default:
            return state
    }
}

export default moduleReducer