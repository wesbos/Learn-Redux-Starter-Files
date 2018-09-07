import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
        const post = this.props.posts[i];
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments />
            </div>

        )
    }
});

export default Single;