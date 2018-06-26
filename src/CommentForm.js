import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {addComment} from './index.js';

const HandleSubmit = addComment;
const validate = values => {
  const errors= {}
  if (!values.commentField) {
    errors.commentField ='Required'
  } else if (values.commentField.lenght > 350) {
    errors.commentField = 'Must be 350 characters or less'
  }
}

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
      <label>{label}</label>
      <div>
          <input {...input} placeholder={label} type={type}/>
          {touched &&(error&& <span>{error}</span>)}
      </div>
  </div>
)
const CommentForm = (props) => {
  const {handleSubmit, reset} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="commentField" type="text" component={renderField} label="Comment field"/>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onclick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default CommentForm({
  form: 'commentForm',
  validate
})(CommentForm)
