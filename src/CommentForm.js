import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import Comment from './Comment.js';
import {addComment} from './actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: text =>dispatch(addComment(text)),
  }
};

const mapStateToProps = state => ({
  comments: [...state.comments, mapDispatchToProps]
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
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = this.state.name;
    this.props.addComment( text );
    this.setState({ text: ""});
  }

  render() {
    const text = this.state.name;
    return (
      <form onSubmit ={this.handleSubmit}>
          <div className="form-grooup">
              <textarea
                rows="7"
                cols="70"
                value = {this.state.name}
                onChange={this.handleChange}
              />
        </div>
            <button type="submit">Add comment</button>
        </form>
    )
  }
}

const ContainerForm = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export default ContainerForm
