import React from 'react'
import "../App.css"

const AddBookMark = ({setOpen}) => {
    function handleClick(){
        setOpen(true)
    }
  return (
    <div className='newbookmark'>
        <h3>Add new Book Mark</h3>
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default AddBookMark