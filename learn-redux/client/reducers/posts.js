// a reducer takes in two things:

//1. the action (info about what happened)
//2. copy of current state

// intake action and store
//
// process request
//
// return store

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}

export default posts;
