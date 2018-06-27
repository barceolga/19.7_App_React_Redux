import React from 'react';
import { reduxForm, Field} from 'redux-form';
import {addComment} from './index.js';

let CommentForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <label className="label">Comment field</label>
        <Field className="textearea" name="commentField" component="textarea" rows="7" cols="70" />
      </div>
      <div className="field">
        <div className="control">
          <button className="commentButton" type="submit">Add comment</button>
        </div>
      </div>
    </form>
};
CommentForm = reduxForm({
  form: 'commentForm'
})(CommentForm);

export default CommentForm;
