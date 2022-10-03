import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentContext from '../contexts/StudentContext'
import './Actions.css'

function Actions({setShowActions}) {
   const navigate = useNavigate()
   const {studentDetails, setStudentDetails, setEngScore, setMathScore, setBioScore,  setPhyScore,setChemScore, setName, setAge,  setClas, regNumber, setRegNumber, setEditMode, editId, setEditId} = useContext(StudentContext)

   const editResult = (regNumber) => {
      const beEdit = studentDetails.find((studentDetail) => studentDetail.regNumber == regNumber )
      console.log(beEdit);
      setRegNumber(beEdit.regNumber)
      setAge(beEdit.age)
      setBioScore(beEdit.bioScore)
      setChemScore(beEdit.chemScore)
      setMathScore(beEdit.mathScore)
      setPhyScore(beEdit.phyScore)
      setName(beEdit.name)
      setEngScore(beEdit.engScore)
      setClas(beEdit.clas)
      setEditMode(true)
      setEditId(beEdit.regNumber)
      navigate('/')
    }
    const cancelAction = (e) => {
      e.preventDefault()
      setRegNumber('')
      setShowActions(false)
    }
    const deleteStudentDetail = (regNumber) => {
      const deleteDetail = studentDetails.filter((studentDetail) => 
         studentDetail.regNumber !== regNumber
      )
      setStudentDetails([... deleteDetail])
      setRegNumber('')
      setShowActions(false)

    }

  return (
    <div className="actionsBackground">
         <div className="actions">
         <button className='sub' onClick={e => editResult(regNumber)}>Edit</button>
         <button className='sub' onClick={e => deleteStudentDetail(regNumber)}>Delete</button>
         <button className='sub' onClick={cancelAction}>X</button>
         </div>
    </div>
  )
}

export default Actions