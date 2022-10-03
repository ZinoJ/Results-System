import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Actions from '../components/Actions'
import ResultsTable from '../components/ResultsTable'
import StudentContext from '../contexts/StudentContext'
import './ResultsPage.css'

function ResultsPage() {
   const navigate = useNavigate()
   const {setShowActions, showActions} = useContext(StudentContext)
  return (
    <>
    {!showActions && <div className="resultspage" style={{display: showActions ? 'none' : ''}}>
      <div className="header">
      <h2>Students Results</h2>
      <button className='submit' onClick={() => navigate('/')}>Go to Home</button>
      </div>
      <ResultsTable  setShowActions={setShowActions} /> 
    </div>}
    {showActions && <Actions setShowActions={setShowActions} />}
    </>
    
  )
}

export default ResultsPage