import { createContext, useState } from "react";
import { inputs, scoress, subjects } from '../data/inputs';

const StudentContext = createContext()
export const StudentProvider = ({children}) => {
   const [subjectss, setSubjectss] = useState(subjects)
   const [showAddNewSubject, setShowAddNewSubject] = useState(false)
   const [studentDetails, setStudentDetails] = useState([]);
   const [engScore, setEngScore] = useState('')
   const [mathScore, setMathScore] = useState('')
   const [bioScore, setBioScore] = useState('')
   const [phyScore, setPhyScore] = useState('')
   const [chemScore, setChemScore] = useState('')
   const [name, setName] = useState('')
   const [regNumber, setRegNumber] = useState('')
   const [age, setAge] = useState('')
   const [clas, setClas] = useState('')
   const [show, setShow] = useState(false)
   const [editMode, setEditMode] = useState(false)
   const [editId, setEditId] = useState(0)
   const [showActions, setShowActions] = useState(false)
   

   return (
      <StudentContext.Provider value={{subjectss, setSubjectss, showAddNewSubject, setShowAddNewSubject, studentDetails, setStudentDetails, engScore, setEngScore, mathScore, setMathScore, bioScore, setBioScore, phyScore, setPhyScore,chemScore, setChemScore, name, setName, regNumber, setRegNumber,age, setAge, clas, setClas, show, setShow, editMode, setEditMode, editId, setEditId,showActions, setShowActions}}>
         {children}
      </StudentContext.Provider>
   )
}


export default StudentContext