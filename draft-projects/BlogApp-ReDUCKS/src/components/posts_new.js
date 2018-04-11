import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostsNew extends React.Component {

    renderField(field) {
        const { meta: {touched, error} } = field;
        const errorClassName = touched && error ? 'has-danger' : '';

        return(
            <div className={`form-group ${errorClassName}`}>
                <label>{ field.label }</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input} />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>New Post</h3>
                <Field
                    name="title"
                    label="Title"
                    component={ this.renderField }
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={ this.renderField }
                />
                <Field
                    name="content"
                    label="Content"
                    component={ this.renderField }
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger left-spaced">
                    Cancel
                </Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Please enter a title'
    }

    if (!values.categories) {
        errors.categories = 'Please enter some categories'
    }

    if (!values.content) {
        errors.content = 'Please enter a content'
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
   connect(null, {createPost})(PostsNew)
);
