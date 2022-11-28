import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faLink } from '@fortawesome/free-solid-svg-icons'
import TagBox from './TagBox'
import Axios from "axios"

const InputCard = ({ setOpen, setCards }) => {
  const [title, setTitle] = useState("");
  const [tagName, setTagName] = useState("")
  const [link, setLink] = useState("")
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit() {
    Axios.post("http://localhost:3001/insert", {
      bookmarkTitle: title,
      bookmarkTags: tags,
      bookmarkLink: link,
      bookmarkDescription: description,
    })

    setTitle("");
    setDescription("")
    setTags([])
    setLink("")
    setTagName("")
    
    Axios.get("http://localhost:3001/read").then((response) => {
      console.log(response.data);
      setCards(response.data);
      console.log("new things added");
    })
  }

  return (
    <div className="modal">
      <div className='bookmark-input'>
        <button style={{
          fontSize: "20px",
          fontWeight: "bold",
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          cursor: "pointer"
        }} onClick={() => {
          setOpen(false)
          setTitle("");
          setDescription("")
          setTags([])
          setLink("")
          setTagName("")
          }}>×</button>
        {/* title */}
        <div className="title">
          <h3 style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>Title of the book mark<sup>*</sup> <span style={{fontSize:"10px"}}> required</span></h3>
          <input type="text" value={title} placeholder="Enter the title.." onChange={handleTitleChange} />
        </div>

        {/* tags */}

        <div className="tags-wrapper">
          <h3 style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}><FontAwesomeIcon icon={faTags} /> Tags</h3>
          <div className="display-tags">
            {
              tags.map((tag, index) => {
                return <TagBox key={index} tagName={tag} tags={tags} setTags={setTags} />
              })
            }
          </div>
          <input type="text" placeholder='Enter the tags here..' value={tagName} onKeyDown={(e) => {
            if (e.key === "Enter" && !tags.includes(tagName)) {
              setTags((prev) => {
                return [...prev, tagName];
              })
              setTagName("")
            }
          }} onChange={(e) => setTagName(e.target.value)} />
        </div>

        {/* link */}
        <div className="link-wrapper">
          <h3 style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
            <FontAwesomeIcon icon={faLink} />
            Link to the book mark<sup>*</sup> <span style={{fontSize:"10px"}}> required</span>
          </h3>
          <input type="text" placeholder='Url of the book mark..' value={link} onChange={(e) => { setLink(e.target.value) }} />
        </div>

        {/* description */}
        <div className="description-wrapper">
          <h3 style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
            Description
          </h3>
          <input type="text" value={description} placeholder="Description here.." onChange={(e) => { setDescription(e.target.value) }} />
        </div>


        <button className='addToBookMark' onClick={handleSubmit}>Add To Book Mark</button>
      </div>
    </div>
  )
}

export default InputCard