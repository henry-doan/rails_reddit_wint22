import { useState, useEffect } from 'react';
import axios from 'axios';
import SubForm from './SubForm';
import SubList from './SubList';

// store all obj and write all crud logic 
const Subs = () => {
  // storing all the subs in the front end 
  // set the subs in the front end
  const [subs, setSubs] = useState([])

  useEffect( () => {
    // index action, array subs be stored in the front end
    axios.get('/api/subs')
      .then( res => setSubs(res.data))
      .catch( err => console.log(err))
  }, [])

  const addSub = (sub) => {
    // add in the backend 
    axios.post('/api/subs', { sub })
      .then( res => setSubs([...subs, res.data]) ) // add in the frontend
      .catch( err => console.log(err))
  }

  const updateSub = (id, sub) => {
    // update in the backend
    axios.put(`/api/subs/${id}`, { sub })
      .then(res => {
        // update on the front end
        const newUpdatedSubs = subs.map( s => {
          if ( s.id === id) {
            return res.data
          }
          return s
        })
        setSubs(newUpdatedSubs)
      })
      .catch( err => console.log(err))
  }

  const deleteSub = (id) => {
    axios.delete(`/api/subs/${id}`)
      .then(res => {
        setSubs( subs.filter( s => s.id !== id ))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <SubForm addSub={addSub} />
      <h1>Subs</h1>
      <SubList 
        subs={subs}
        updateSub={updateSub}
        deleteSub={deleteSub}
      />
    </>
  )
}

export default Subs;