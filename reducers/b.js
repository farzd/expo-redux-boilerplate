export default function(state = {b: false}, action) {
    switch (action.type) {
    case 'b':
        return {...state, b:!state.b}

    default:
        return state;
    }
}