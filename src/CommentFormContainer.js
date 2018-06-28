import {connect} from 'react-redux';
import { reduxForm} from 'redux-form';
import React from 'react';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import Comment from './Comment.js';
import {addComment} from './actions.js';


/*let CommentFormContainer = ({addComment, values}) =>
  <CommentForm
    onSubmit={values => addComment(values.CommentFormContainer)}
  />

  const mapDispatchToProps = (dispatch) => ({
    addComment: value =>dispatch(addComment(value)),

  });
  console.log(mapDispatchToProps);
  const mapStateToProps = state => ({
    comments: [...state.comments, mapDispatchToProps]
  });

  export default reduxForm({ form: 'CommentFormContainer'})(connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer));*/
