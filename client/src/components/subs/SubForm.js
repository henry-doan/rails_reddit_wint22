import { useState, useEffect } from 'react';

const SubForm = ({ addSub, id, title, updateSub, setEdit }) => {
  const [sub, setSub] = useState({ title: '' })
  // const [sub, setSub] = useState({ comment: '', age: 0, price: 0.0, friend: false })

  useEffect( () => {
    if (id) {
      setSub({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault() // not do a page refresh
    if (id) {
      updateSub(id, sub)
      setEdit(false)
    } else {
      addSub(sub) // add the sub, with what the user typed
    }
    // clear out the form
    setSub({ title: '' })
  }

  return (
    <>
      <h1>{ id ? 'Update' : 'Create'} Sub</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          name='title'
          value={sub.title}
          onChange={(e) => setSub({...sub, title: e.target.value })}

          required
        />
        {/* Text datatype */}
        {/* <textarea 
          name='comment'
          value={sub.comment}
          onChange={(e) => setSub({...sub, comment: e.target.value })}

          required
        ></textarea> */}
        {/* number / integer */}
        {/* <input 
          name='age'
          type='number'
          value={sub.age}
          onChange={(e) => setSub({...sub, age: e.target.value })}

          required
        /> */}
        {/* number / float*/}
        {/* <input 
          name='price'
          type='number'
          step="0.01"
          value={sub.price}
          onChange={(e) => setSub({...sub, price: e.target.value })}

          required
        /> */}
        {/* Boolean */}
        {/* <input 
          name='friend'
          type='checkbox'
          value={sub.friend}
          onChange={(e) => setSub({...sub, friend: e.target.value })}
          // might have to change the on change
          required
        /> */}
        {/* type='time'
        type='date' */}
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SubForm;