// Creates actions including what happened and the payload of information that is needed to execute. When the actions get dispatched they are handled by a reducer and then the reducer is responsible for updating the state.

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index: index
  }
}

// add commnet
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId: postId,
    author: author,
    comment: comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i: i,
    postId: postId
  }
}
