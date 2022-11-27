import React from 'react'
import Axios from 'axios'

const Conformation = ({operation}) => {
  function handleYesClick(e){
    if(operation === "Update"){
        Axios.put("http://localhost:3000")
    }
  }

  function handleNoClick(e){

  }
  return (
    <div>
        <p>Are you sure you want to {operation}</p>
        <button onClick={handleYesClick}>Yes</button>
        <button onClick={handleNoClick}>No</button>
    </div>
  )
}

export default Conformation