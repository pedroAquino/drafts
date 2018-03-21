import _ from 'lodash';
import React from 'react';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostsIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    { post.title }
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add new Post
                    </Link>
                </div>
                <h3>Posts Index</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return  { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
