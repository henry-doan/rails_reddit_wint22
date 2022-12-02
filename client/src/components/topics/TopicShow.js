import { useState } from 'react';
import TopicForm from './TopicForm';

const TopicShow = ({ id, title, body, updateTopic, deleteTopic }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <TopicForm 
            id={id}
            title={title}
            body={body}
            setEdit={setEdit}
            updateTopic={updateTopic}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </>
        :
        <>
          <h3>{title}</h3>
          <p>{body}</p>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteTopic(id)}
          >
            Delete
          </button>
          <button>
            Comments
          </button>
        </>
      }
    </>
  )
}

export default TopicShow;