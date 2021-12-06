const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded':
            // We nned to return a new state object
            return [
                // with all of the old todos
                ...state.todos,
                // and the new todo object
                {
                    id: nextTodoId(state.todos),
                    text: action.payload,
                    complete: false
                }
            ]
        case 'todos/todoToggled': {
            return state.todos.map(todo => {
                // If this isn't the todo item we're looking for, leave it alone
                if (todo.id !== action.payload) {
                    return todo
                }
                // We've found the todo that has to change. Return a copy:
                return {
                    ...todo,
                    // Flip the completed flag
                    completed: !todo.completed
                }
            })
        }
        default:
            return state
    }
}