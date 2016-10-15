import { createStore } from "redux"

/**
 *
 * @param state
 * @param action
 *
 * state : {
 *  issues: [],
 *  repository: '',
 *  counter: 0
 * }
 */

// FLUX Standart action
// {type: INCREASE_COUNTER, payload: ..., error}
function reducer(state, action) {
    switch (action.type){
        case 'INCREASE_COUNTER':
            return { ...state, ...{ counter: (state.counter+1)}};
        case 'RESET_COUNTER':
            return { ...state, ...{ counter: 0}};
        case 'UNINCREASE_COUNTER':
            return { ...state, ...{ counter: (state.counter-1)}};
        case 'LOAD_ISSUES':
            return { ...state, ...{ issues: (action.payload)}};
        default:
            return state;
    }
}

const store  = createStore(reducer,{
                                issues: [],
                                repository: '',
                                counter: 0
                            });

export default  store;