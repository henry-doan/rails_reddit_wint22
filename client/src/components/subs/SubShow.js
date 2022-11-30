import { useState } from 'react';
import SubForm from './SubForm';

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
        </>
      }
    </>
  )
}

export default SubShow;