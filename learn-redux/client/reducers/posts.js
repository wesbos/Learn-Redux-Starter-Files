// a reducer takes in two things:
//1. the actions (info about what happened)
//2. a copy of current state

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;