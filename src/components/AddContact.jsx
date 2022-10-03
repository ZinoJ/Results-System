import React, { useContext, useState } from 'react'
import StudentContext from '../contexts/StudentContext';
import {ImCancelCircle} from 'react-icons/im'
import './AddContact.css'

function AddContact() {

  const {subjectss, setSubjectss, setShowAddNewSubject} = useContext(StudentContext)
  const lastElement =  subjectss.slice(-1)
  const [newSubject, setNewSubject] = useState('')
  console.log(subjectss);
  
  const addToContact = (e) => {
    e.preventDefault()
    if (!newSubject == '') {
      setSubjectss(prevState => [...prevState, {title: newSubject, subjectId: lastElement[0].subjectId + 1}])
      setNewSubject('')
    }
    setShowAddNewSubject(false)


  }

  return (
    <div className="addcontact">
      <div className='form'>
         <input type="text" placeholder='New Subject' value={newSubject} minLength={5} onChange={e => setNewSubject(e.target.value)} />
         <button onClick={addToContact}>Add</button>
         
      </div>
      {/* <ImCancelCircle className='addcontact__icon' style={{fontSize: '2rem', color: 'purple'}}/> */}
    </div>
  )
}

export default AddContact