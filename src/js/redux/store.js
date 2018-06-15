import { createStore, combineReducers } from 'redux';


const initialState = {
    blue: 0,
    red: 0
}

// reducer - should be in separate file
const counterReducer = ( state = initialState, action) => {
    switch( action.type ){
        case 'INCREMENT_BLUE':
            state = Object.assign( {}, state, { blue: state.blue + 1 });
            break;
        case 'INCREMENT_RED':
            state = Object.assign( {}, state, { red: state.red + 1 });
            break;
        default: 
            state;
    }

    return state;
}


const combined = combineReducers( {
    counter: counterReducer
})

const store = createStore( combined )

const incrementRed = () => ( { type: 'INCREMENT_RED' } );
const incrementBlue = () => ( { type: 'INCREMENT_BLUE' } );

export { incrementRed, incrementBlue };
export default store;