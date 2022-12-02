import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = () => {
  const [comments, setComments] = useState([])

  const { topicId } = useParams()

  useEffect( () => {
    axios.get(`/api/topics/${topicId}/comments`)
      .then( res => setComments(res.data))
      .catch( err => console.log(err))
  }, [])

  const addComment = (comment) => {
    axios.post(`/api/topics/${topicId}/comments`, { comment })
      .then( res => setComments([...comments, res.data]))
      .catch( err => console.log(err))
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/topics/${topicId}/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = comments.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setComments(newUpdatedComments)
      })
      .catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/topics/${topicId}/comments/${id}`)
      .then( res => setComments( comments.filter( c => c.id !== id)))
      .catch( err => console.log(err))
  }

  return(
    <>
      <CommentForm addComment={addComment} />
      <h1>All Comments</h1>
      <CommentList
        comments={comments}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    </>
  )
}

export default Comments;