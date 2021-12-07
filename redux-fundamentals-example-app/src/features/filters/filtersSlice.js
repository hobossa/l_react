const initialState = {
    status: 'All',
    colors: []
}


export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged': {
            return {
                // copy the other filter fields
                ...state,
                // And replace the status field with the new value
                status: action.payload
            }
        }
        default:
            return state
    }
}