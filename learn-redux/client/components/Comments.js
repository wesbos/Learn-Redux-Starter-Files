import React from 'react';

const Comments = React.createClass({
    render() {
        const { i, text, user } = this.props;

        return (
            <div className="comment">
                it is comment
            </div>
        )
    }
})

export default Comments;