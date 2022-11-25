import React from 'react'

const TagBox = ({tagName,tags,setTags}) => {
  return (
    <span style={{
      display:"flex",
      gap: "1px"
    }}>
        {tagName}
        <button style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:"#595959",
          cursor: "pointer",
          borderRadius:"1000000000px",
          color:"#fff"
        }} onClick={()=>{
            setTags(tags.filter((tag)=>{
              return tag !== tagName
            }))
        }}>
            ×
        </button>
    </span>
  )
}

export default TagBox