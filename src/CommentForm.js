import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import Comment from './Comment.js';
import {addComment} from './actions.js';
import  './CommentForm.css';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: text =>dispatch(addComment(text)),
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
    console.log(event.target)
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
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit ={this.handleSubmit} className="form">
          <div className="form-grooup">
              <textarea
                rows="7"
                cols="70"
                onChange={this.handleChange}
              >{this.state.text}</textarea>
        </div>
            <button type="submit" className="form-button">Add comment</button>
        </form>
    )
  }
}

const ContainerForm = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export default ContainerForm
