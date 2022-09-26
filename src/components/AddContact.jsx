import React, { useContext, useState } from 'react'
import StudentContext from '../contexts/StudentContext';
import {ImCancelCircle} from 'react-icons/im'
import './AddContact.css'

function AddContact() {

  const {subjectss, setSubjectss, setShowAddNewSubject} = useContext(StudentContext)
  const [newSubject, setNewSubject] = useState('')
  console.log(subjectss);
  const addToContact = (e) => {
    e.preventDefault()
    if (!newSubject == '') {
      setSubjectss(prevState => [...prevState, {title: newSubject}])
      setNewSubject('')
    }
    setShowAddNewSubject(false)


  }

  return (
    <div className="addcontact">
      <form>
         <input type="text" placeholder='New Subject' value={newSubject} minLength={5} onChange={e => setNewSubject(e.target.value)} />
         <button onClick={addToContact}>Add</button>
         
      </form>
      {/* <ImCancelCircle className='addcontact__icon' style={{fontSize: '2rem', color: 'purple'}}/> */}
    </div>
  )
}

export default AddContact