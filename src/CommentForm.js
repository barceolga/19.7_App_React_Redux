import React from 'react';
import { reduxForm, Field} from 'redux-form';


const CommentForm = ({ handleChange, handleSubmit, value}) => {
  return <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <Field className="textearea" name="commentField" component="textarea" rows="7" cols="70" onChange={handleChange} value={value} />
      </div>
      <div className="field">
          <button className="commentButton" type="submit">Add comment</button>
      </div>
    </form>
};

export default reduxForm({
  form: 'commentForm'
})(CommentForm);
