// A reducer's job is to take in action and store, process the action and then return the store.

// A reducer takes in two things:
// 1) the action (info about what happened)
// 2) copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after the one we are updating
      ]
    // always have default returning the updated state
    default:
      return state;
  }
}

export default posts;
