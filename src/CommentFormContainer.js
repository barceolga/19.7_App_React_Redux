import {connect} from 'react-redux';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import {addComment} from './index.js';
import Comment from './Comment.js';

const mapStateToProps = state => ({
  comments: [...state.comments, Comment]
})

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
