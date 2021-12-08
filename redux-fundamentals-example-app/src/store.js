import { createStore, applyMiddleware } from 'redux'
// import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

// import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers'

// import { print1, print2, print3 } from './exampleAddons/middleware'

// const store = createStore(rootReducer, undefined, sayHiOnDispatch)

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
// const store = createStore(rootReducer, undefined, composedEnhancer)

const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(thunkMiddleware)
    // applyMiddleware(print1, print2, print3)
    // other store enhancers if any
)
const store = createStore(rootReducer, composedEnhancer)

// Middleware written as ES5 functions
// Outer function:
// function exampleMiddleware(storeAPI) {
//     return function wrapDispatch(next) {
//       return function handleAction(action) {
//         // Do anything here: pass the action onwards with next(action),
//         // or restart the pipeline with storeAPI.dispatch(action)
//         // Can also use storeAPI.getState() here
//         return next(action)
//       }
//     }
//   }
// Middleware written as ES6 function
// const anotherExampleMiddleware = storeAPI => next => action => {
//     // Do something in here, when each action is dispatched

//     return next(action)
// }

// const loggerMiddleware = storeAPI => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', storeAPI.getState())
//     return result
// }

// const middelwareEnhancer = applyMiddleware(loggerMiddleware)
// const store = createStore(rootReducer, middelwareEnhancer)


// const alwaysReturnHelloMiddleware = storeAPI => next => action => {
//     const originalResult = next(action);
//     // Ignore the original result, return something else
//     return 'Hello!'
// }

// const middlewareEnhancer = applyMiddleware(alwaysReturnHelloMiddleware)
// const store = createStore(rootReducer, middlewareEnhancer)
// const dispatchResult = store.dispatch({type: 'some/action'})
// console.log(dispatchResult)


// const delayedMessageMiddleware = storeAPI => next => action => {
//     if (action.type === 'todos/todoAdded') {
//         setTimeout(() => {
//             console.log('Added a new todo: ', action.payload)
//         }, 1000)
//     }

//     return next(action)
// }

// const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware)
// const store = createStore(rootReducer, middlewareEnhancer)

export default store