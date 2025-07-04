import {createStore} from 'redux';

function counterReducer(state={counter:0,showCounter:true},action){
    switch (action.type){
        case 'increment':
            return {counter:state.counter+1,showCounter:state.showCounter};
        case 'decrement':
            return {counter:state.counter-1,showCounter:state.showCounter};
        case 'toggle':
            return {counter:state.counter,showCounter:!state.showCounter};
        default:
            return state;
    }
}
const store= createStore(counterReducer);
export default store;