import {connect} from 'react-redux';
import Comment from './Comment.js';
import {
  thumbUpComment,
  thumbDownComment,
  removeComment,
  updateComment
} from './actions.js';
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  updateComment: (id, text) => dispatch(updateComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);
