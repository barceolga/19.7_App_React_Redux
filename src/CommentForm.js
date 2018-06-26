import React from 'react';
import { LocalForm, Control, actions } from 'react-redux-form';
import {addComment} from './index.js';

 export default class CommentForm extends React.Component {
  handleChange(values) {

  }

  handleSubmit(values) {
    this.props.addComment({
      values: this.props.values
    })
  }
  /*attachDispatch(dispatch) {
    this.formDispatch = dispatch;
  }
  changeTextToFormText() {
    this.formDispatch(actions.change('comment.text', model.value));
  }*/
  render() {
    return (
      <LocalForm
       model="comment"
      // getDispatch{(dispatch) => this.attach(dispatch)}
      // initialState={{text: ''}}
       onChange={(values) => this.handleChange(values)}
       onSubmit={(values) => this.handleSubmit(values)}
       >
         <Control.text model=".comment" />
     </LocalForm>
   );
  }
}
