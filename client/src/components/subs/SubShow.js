import { useState } from 'react';
import SubForm from './SubForm';
import { Link } from 'react-router-dom';

const SubShow = ({ id, title, updateSub, deleteSub }) => {
// const SubShow = (props) => {
//   props.id
  const [editing, setEdit] = useState(false)

  // ternary one liner of if else 
  // condition ? if : else
  return (
    <>
      {
        editing ?
        <>
          <SubForm 
            id={id}
            title={title}
            updateSub={updateSub}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h3>{title}</h3>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteSub(id)}>
            Delete
          </button>
          <Link 
            to={`/${id}/topics`}
            state={{ title }} // pass in read only info through the link
          >
            <button>
              Topics
            </button>
          </Link>
        </>
      }
    </>
  )
}

export default SubShow;