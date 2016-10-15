import React from "react"
import { render } from 'react-dom'

import App from "./App"
import store from "./state";

// render(<App/>,document.getElementById('root'));

store.subscribe(()=>{
    console.log('New state:', store.getState());
});

store.dispatch({
    type: 'INCREASE_COUNTER',
});

store.dispatch({
    type: 'INCREASE_COUNTER',
});


store.dispatch({
    type: 'UNINCREASE_COUNTER',
});


store.dispatch({
    type: 'INCREASE_COUNTER'
});


store.dispatch({
    type: 'RESET_COUNTER'
});

console.log('UNKOWN');
store.dispatch({
    type: 'UNKOWN',
});
// console.log('UNKOWN');
store.dispatch({
    type: 'LOAD_ISSUES',
    payload: [{id:1,name:"FIRST ISSUE"},{id:2,name:"SECOND ISSUE"}],
});

