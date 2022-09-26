import React, { useContext } from 'react'
import AddContact from '../components/AddContact';
import StudentContext from '../contexts/StudentContext';
import { inputs, subjects } from '../data/inputs';
import './HomePage.css'


function HomePage() {

   const {subjectss, setSubjectss, showAddNewSubject, setShowAddNewSubject} = useContext(StudentContext)
   const addNewSubject = (e) => {
      e.preventDefault()
      setShowAddNewSubject(true)
   }
   
  return (
    <div className="homepage">
      <h2>Welcome To Reports Management</h2>
      <h4>Student Details</h4>
      <form>
         <div className="studentDetails">
         {inputs.map(({title})=> (
            <input placeholder= {title} type="text" key={title}/>
         ))}
         </div>
            <h4>Subjects Offered by Student</h4>
         <div className="subjects">
            {subjectss.map(({title}) => (
               <div className="subject" key={title}>
                  <label htmlFor="">{title}</label>
               <input placeholder= 'Enter Scores' type="number" max={100} min={1}/>
               </div>
               ))}
         </div>
         {!showAddNewSubject ?  (<button onClick={addNewSubject}>Add New Subject</button>) : (<AddContact />)}
         
         
      </form>  
      

    </div>
  )
}

export default HomePage