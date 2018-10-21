// a reducer takes in two things:
//1. the actions (info about what happened)
//2. a copy of current state

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log('increment Likes!');
            const i = action.index;
            return [
                ...state.slice(0, i),
                { ...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1)
            ]
        default:
            return state;
    }

}

export default posts;