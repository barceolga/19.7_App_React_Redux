import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  addComment,
  editComment
} from './actions.js';
import  './CommentForm.css';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: text =>dispatch(addComment(text)),
    editComment: (id, text) =>dispatch(editComment(id, text))
  }
};

const mapStateToProps = state => ({
  comments: state.comments,
  form: state.form
});

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment( this.state.text );
    this.setState({ text: ""});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.form.text,
      id: nextProps.form.id
    })
  }

  handleEdit(event) {
    if(!this.state.id) {
      return
    }
      event.preventDefault();
     this.props.editComment(
            this.state.id, this.state.text
      );
  }

  switchToAddMode(event){
    this.setState({
      text: ''
    })
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit ={this.handleSubmit} className="form">
          <div className="form-grooup">
              <textarea
                rows="7"
                cols="70"
                value={this.state.text}
                onChange={this.handleChange}
              />
        </div>
         <div>
            <button type="submit" className="form-button">Add comment</button>
            <button
              className="form-button"
              onClick={this.handleEdit.bind(this)}
              > Edit comment </button>
              <button
                className="form-button_negative"
                onClick={this.switchToAddMode.bind(this)}
                > Clear </button>
        </div>
        </form>
    )
  }
}

const ContainerForm = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export default ContainerForm
