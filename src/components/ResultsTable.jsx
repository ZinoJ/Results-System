import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentContext from "../contexts/StudentContext";
import { headers, scoress } from "../data/inputs";
import Actions from "./Actions";

import "./ResultsTable.css";

function ResultsTable({setShowActions}) {
  const navigate = useNavigate()
  const {studentDetails, setEngScore, setMathScore, setBioScore,  setPhyScore,setChemScore, setName, setAge,  setClas, setRegNumber, editMode, setEditMode, editId, setEditId} = useContext(StudentContext)
  

 

  const goToActions = (regNumber) => {
    const beEdit = studentDetails.find((studentDetail) => studentDetail.regNumber == regNumber )
    setRegNumber(beEdit.regNumber)
      // console.log(beEdit);
    setShowActions(true)
  }

  return (
    <div className="resultstable">
      <div className="resultstable__container">
      <table>
        <thead>
        <tr>
        {headers.map(({title}) => (
          <th key={title}>{title}</th>
        ))}
        </tr>
        </thead>
        
        <tbody>
          {studentDetails.map(({name, regNumber, engScore, mathScore,bioScore, phyScore, chemScore, scoresTotal}) => (
              // <tr key ={regNumber} onClick={e => editResult(regNumber)}>
              <tr key ={regNumber} onClick={e => goToActions(regNumber)}>
              <td>{name}</td>
              <td>{regNumber}</td>
              <td>{engScore}</td>
              <td>{mathScore}</td>
              <td>{bioScore}</td>
              <td>{phyScore}</td>
              <td>{chemScore}</td>
              <td>{scoresTotal}</td> 
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default ResultsTable;
