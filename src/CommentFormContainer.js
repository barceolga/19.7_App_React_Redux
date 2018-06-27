import {connect} from 'react-redux';
import React from 'react';
import { reduxForm} from 'redux-form';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import {addComment} from './actions.js';
import Comment from './Comment.js';

class CommentFormContainer extends React.Component {
  submit = values => {
    const text = JSON.stringify(values);
    console.log(text);
    return text;
  }
  render() {
    return <CommentForm onSubmit={this.submit} />
  }
};

const newComment = dispatch => ({
    addComment: (submit) => dispatch(addComment(submit))
  });
const mapStateToProps = state => ({
    comments: [...state.comments, newComment]
  });

CommentFormContainer = connect(
  mapStateToProps,
  newComment,
)(CommentFormContainer);

export default reduxForm({
  form: 'commentFormContainer'
})(CommentFormContainer);
