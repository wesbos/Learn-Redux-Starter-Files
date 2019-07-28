import React from 'react';
import Photo from './photo';
import Comments from './comments';

const PhotoSingle = React.createClass({
    render() {
        const { postId } = this.props.params;
        //index of the post
        const index = this.props.posts.findIndex((post)=> post.code === postId);
        const post = this.props.posts[index];
        const postComments = this.props.comments[postId] || [];
        return (
            <div className="photo-single">
                <Photo i={index} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        )
    }
});

export default PhotoSingle;