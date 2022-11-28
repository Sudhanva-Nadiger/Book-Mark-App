import React from 'react'
import Axios from 'axios'
import "./delete.css"

const DeleteConformation = ({id,setShowDeletePage,setCards,cards}) => {
  function handleYesClick(e){
    Axios.delete(`http://localhost:3001/delete/${id}`)
    let arr = cards.filter((card)=>{
      return card._id !== id;
    })
    console.log(arr);
    setCards(arr)
    setShowDeletePage(false)
  }

  function handleNoClick(){
    setShowDeletePage(false)
  }
  return (
    <div className='delete'>
        <p>Are you sure you want to delete ?</p>
        <div style={{display:"flex", gap:"10px"}}>
        <button onClick={handleYesClick}>Yes</button>
        <button onClick={handleNoClick}>No</button>
        </div>
    </div>
  )
}

export default DeleteConformation