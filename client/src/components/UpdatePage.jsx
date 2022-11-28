import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faLink } from '@fortawesome/free-solid-svg-icons'
import TagBox from './TagBox'
import Axios from "axios"
import "../App.css"

const UpdatePage = ({ title, tags, link, description, setOpen, id, cards, setCards }) => {

    const [newtitle, setNewTitle] = useState(title);
    console.log(newtitle);
    const [newtagName, setNewTagName] = useState("")
    const [newLink, setNewLink] = useState(link)
    const [newDescription, setNewDescription] = useState(description);
    const [newTags, setNewTags] = useState(tags);

    function handleSubmit(id) {
        let updatedCard = {
            bookmarkTitle: newtitle,
            bookmarkTags: newTags,
            bookmarkDescription: newDescription,
            bookmarkLink: newLink
        }
        Axios.put("http://localhost:3001/update", {
            id : id,
            updatedCard : updatedCard
        })

        let objIndex = cards.findIndex((obj => obj._id === id));
        setCards((prev)=>{
            prev[objIndex] = updatedCard
            return [...prev]
        })

        setOpen(false)
    }

    function handleTitleChange(e) {
        setNewTitle(e.target.value)
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
                    setNewLink(link)
                    setNewTags(tags)
                    setNewTitle(title)
                    setNewDescription(description)
                }}>×</button>
                {/* title */}
                <div className="title">
                    <h3 style={{
                        display: "flex",
                        gap: "2px",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }}>Title of the book mark<sup>*</sup> <span style={{ fontSize: "10px" }}> required</span></h3>
                    <input type="text" value={newtitle} placeholder="Enter the title.." onChange={handleTitleChange} />
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
                            newTags.map((tag, index) => {
                                return <TagBox key={index} tagName={tag} tags={tags} setTags={setNewTags} />
                            })
                        }
                    </div>
                    <input type="text" placeholder='Enter the tags here..' value={newtagName} onKeyDown={(e) => {
                        if (e.key === "Enter" && !tags.includes(newtagName)) {
                            setNewTags((prev) => {
                                return [...prev, newtagName];
                            })
                            setNewTagName("")
                        }
                    }} onChange={(e) => setNewTagName(e.target.value)} />
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
                        Link to the book mark<sup>*</sup> <span style={{ fontSize: "10px" }}> required</span>
                    </h3>
                    <input type="text" placeholder='Url of the book mark..' value={newLink} onChange={(e) => { setNewLink(e.target.value) }} />
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
                    <input type="text" value={newDescription} placeholder="Description here.." onChange={(e) => { setNewDescription(e.target.value) }} />
                </div>
                <button className='addToBookMark' onClick={()=>handleSubmit(id)}>Update Book mark</button>
            </div>
        </div>
    )
}

export default UpdatePage