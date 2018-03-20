import React from 'react';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';

class PostsIndex extends React.Component {

    componentDidMount() {
        console.log('ok');
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h2>POSTS INDEX</h2>
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostsIndex);
