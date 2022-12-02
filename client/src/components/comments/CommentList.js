import CommentShow from './CommentShow';

const CommentList = ({ comments, updateComment, deleteComment }) => (
  <>
    { comments.map( c => 
      <CommentShow
        key={c.id}
        {...c}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    )}
  </>
) 

export default CommentList;