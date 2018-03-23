import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends  React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>
                <h3> Show Post </h3>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
