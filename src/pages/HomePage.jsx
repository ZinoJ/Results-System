import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddContact from "../components/AddContact";
import StudentContext from "../contexts/StudentContext";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate()
  const {showAddNewSubject, setShowAddNewSubject, setStudentDetails , studentDetails,engScore, setEngScore, mathScore, setMathScore, bioScore, setBioScore, phyScore, setPhyScore,chemScore, setChemScore, name, setName, regNumber, setRegNumber,age, setAge, clas, setClas, show, setShow, editMode, setEditMode, editId, setEditId, setShowActions} =
    useContext(StudentContext);
 
  const scoresTotal = [Number(engScore), Number(mathScore), Number(bioScore), Number(phyScore), Number(chemScore)].reduce(
    (previousScore, currentScore)=>previousScore+currentScore, 
    0)
  const studentDetail = {
    name, regNumber, age, clas, engScore, mathScore, bioScore, phyScore, chemScore, scoresTotal
  }

  const clearFields = () => {
    setBioScore('')
    setMathScore('')
    setEngScore('')
    setChemScore('')
    setPhyScore('')
    setClas('')
    setName('')
    setRegNumber('')
    setAge('')
  }

  const addNewSubject = (e) => {
    e.preventDefault();
    setShowAddNewSubject(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 2000); 
   
  },[show])

  const submitForm = (e) => {
    e.preventDefault();
    setStudentDetails(prevState => [...prevState, studentDetail])
    clearFields()
    setShow(true)
  };

  const editForm = (e) => {
    e.preventDefault()
    const editStudent = studentDetails.find((studentDetail) => studentDetail.regNumber === editId )
    console.log(editStudent)
    
    const updateStudentDetails = studentDetails.map((studentDetail) => 
      studentDetail.regNumber === editStudent.regNumber ? (studentDetail = {regNumber: studentDetail.regNumber, name, age, clas, engScore, mathScore, bioScore, phyScore, chemScore, scoresTotal}) : ({
        regNumber:studentDetail.regNumber,
        age:studentDetail.age,
        bioScore:studentDetail.bioScore,
        chemScore:studentDetail.chemScore,
        mathScore:studentDetail.mathScore,
        phyScore:studentDetail.phyScore,
        name:studentDetail.name,
        engScore:studentDetail.engScore,
        clas:studentDetail.clas,
        scoresTotal:studentDetail.scoresTotal
      })
    )
    setEditMode(false)
    setEditId(0)
    setStudentDetails(updateStudentDetails)
    setShowActions(false)
    clearFields()
    navigate('/results')
  }

  const clearForm = (e) => {
    e.preventDefault()
    clearFields()
  }

  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="homepage">
      <h2>Welcome To Results Management</h2>
      <div className="container">
      {show && <h4 className="success">Result Submission Successful</h4>}
      <h4>Student Details</h4>
      <form onSubmit={submitForm}>
        <div className="studentDetails">
            <input type="text" placeholder="Student's Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Registration Number" value={regNumber} onChange={e => setRegNumber(e.target.value)}/>
            <input type="text" placeholder="Student's Age" value={age} onChange={e => setAge(e.target.value)}/>
            <input type="text" placeholder="Student's Class" value={clas} onChange={e => setClas(e.target.value)}/>
        </div>
        <h4>Subjects Offered by Student</h4>
        <div className="subjects">

          <div className="subject">
              <label htmlFor="">English Language</label>
              <input
                placeholder="Enter Scores"
                type="number"
                max={100}
                min={1}
                value={engScore}
                onChange={e => setEngScore(e.target.value)}
              />
            </div>
            <div className="subject">
              <label htmlFor="">Mathematics</label>
              <input
                placeholder="Enter Scores"
                type="number"
                max={100}
                min={1}
                value={mathScore}
                onChange={e => setMathScore(e.target.value)}
              />
            </div>
            <div className="subject">
              <label htmlFor="">Biology</label>
              <input
                placeholder="Enter Scores"
                type="number"
                max={100}
                min={1}
                value={bioScore}
                onChange={e => setBioScore(e.target.value)}
              />
            </div>
            <div className="subject">
              <label htmlFor="">Physics</label>
              <input
                placeholder="Enter Scores"
                type="number"
                max={100}
                min={1}
                value={phyScore}
                onChange={e => setPhyScore(e.target.value)}
              />
            </div>
            <div className="subject">
              <label htmlFor="">Chemistry</label>
              <input
                placeholder="Enter Scores"
                type="number"
                max={100}
                min={1}
                value={chemScore}
                onChange={e => setChemScore(e.target.value)}
              />
            </div>

        </div>
        
        <div className="homepage__buttons">
        {/* {!showAddNewSubject ? (
          <button onClick={addNewSubject} className="submit" type="button" >Add New Subject</button>
        ) : (
          <AddContact />
        )} */}
        <button className="submit" type="button" onClick={clearForm}>Clear Fields</button>
        {!editMode && <button className="submit" type="submit">Submit</button> }
        {editMode && <button className="submit" type="button" onClick={editForm}>Edit</button>}
        <button className="submit" type="button" onClick={() => navigate('/results')} >Go To Results Page</button>
        </div>
      </form>
      </div>
      <button className= 'submit logout' onClick={logout}>Logout</button>
    </div>
  );
}

export default HomePage;
