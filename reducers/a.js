export default function(state = {a: false}, action) {
    switch (action.type) {
    case 'a':
        return {...state, a:!state.a}

    default:
        return state;
    }
}