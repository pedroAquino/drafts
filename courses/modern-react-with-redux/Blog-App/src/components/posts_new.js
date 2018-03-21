import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

    renderField(field) {
        return(
            <div className="form-group">
                <label>{ field.label }</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input} />
            </div>
        );
    }

    render() {
        return(
            <form>
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
        errors.categories = 'Please enter a categories'
    }

    if (!values.content) {
        errors.content = 'Please enter a content'
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
