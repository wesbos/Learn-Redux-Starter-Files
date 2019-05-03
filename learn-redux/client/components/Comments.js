import React from 'react';

const Comments = class extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      addComment,
      params: { postId }
    } = this.props;

    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  renderComment(comment, i) {
    const {
      params: { postId },
      removeComment
    } = this.props;

    return (
      <div key={i} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={removeComment.bind(null, postId, i)}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }

  render() {
    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
};

export default Comments;
