import {connect} from 'react-redux';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
  comments: [state.comments, ...comment]
})

export default connect(mapStateToProps)(CommentsList);
