import { createContext, useState } from "react";
import { inputs, subjects } from '../data/inputs';

const StudentContext = createContext()
export const StudentProvider = ({children}) => {
   const [subjectss, setSubjectss] = useState(subjects)
   const [showAddNewSubject, setShowAddNewSubject] = useState(false)

   return (
      <StudentContext.Provider value={{subjectss, setSubjectss, showAddNewSubject, setShowAddNewSubject}}>
         {children}
      </StudentContext.Provider>
   )
}


export default StudentContext