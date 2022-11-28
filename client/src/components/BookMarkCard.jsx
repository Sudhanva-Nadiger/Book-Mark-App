import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faPen,faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import "./cardd.css"
import { useState } from 'react'
import UpdatePage from './UpdatePage'
import "../App.css"
import DeleteConformation from "./DeleteConformation"

const BookMarkCard = ({cards,setCards,title, tags, url, description,id}) => {
    
    const [showModal, setshowModal] = useState(false);
    const tagStyle1 = {
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        backgroundColor: "#C0C0C0",
        color: "black",
        padding: "5px",
        borderRadius: "5px"
    }

    const tagStyle2 ={
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        backgroundColor: "#C0C0C0",
        color: "black",
        padding: "5px",
        height : "30px",
        borderRadius: "5px",
        flexWrap: "nowrap"
    }

    const [showUpdatePage, setShowUpdatePage] = useState(false);
    const [showDeletePage, setShowDeletePage] = useState(false);

    function handleUpdateClick(e){
        setShowUpdatePage(true);
    }

    function handleDeleteClick(){
        setShowDeletePage(true)
    }

    return (
        <div className={!showModal ? "overlay" : "overlay card-modal"}>
             <div className={showUpdatePage ? 'helper-div show' : "helper-div"} style={{ top: "0", left: "0", position: "absolute" }}> <UpdatePage title={title} tags={tags} link={url} description={description} setOpen={setShowUpdatePage} id={id} cards={cards} setCards={setCards}/> </div>
            <div className={!showModal ?'card-wrapper': "card-wrapper show-info"}>
                {showModal && <button style={{cursor:"pointer",backgroundColor:"dodgerblue", color : "white", marginTop:"5px", width: "50px", height:"30px", borderRadius:"10px"}} onClick={() => setshowModal(false)}>Close</button>}
                <h3 className='card-title'>{title} {true ? "" : ""}</h3>
                <div className="card-tags">
                    <span className='tag-icon'><FontAwesomeIcon icon={faTags} /></span>
                    <div style={{overflow:"hidden",flexWrap:"nowrap", display:"flex", gap:"4px"}}>
                        {
                            !showModal && tags.slice(0, 10).map((tag, index) => {
                                return <div style={tagStyle2}>{tag}</div>
                            })
                        }
                        {
                            showModal && tags.map((tag, index) => {
                                return <div style={tagStyle1}>{tag}</div>
                            })
                        }
                    </div>
                </div>
                {!showModal && <span onClick={() => setshowModal(true)} className='view-more'>․․․view more</span>}
                <div className="card-info">
                    <p>{!showModal && description.slice(0, 70)}</p>
                    <p>{showModal && description}</p>
                    {!showModal && <span onClick={() => setshowModal(true)} className='view-more'>․․․view more</span>}
                </div>
                <div className="card-url">
                    <a href={url} target="_blank">View Page</a>
                </div>
            </div>
            <div className={!showModal ? "cardButton-wrapper" : "cardButton-wrapper handle"}>
                <button title='view book mark' onClick={()=>setshowModal(true)} className="operation-button"><FontAwesomeIcon icon={faEye}/></button>
                <button onClick={handleUpdateClick} title='update' className="operation-button"><FontAwesomeIcon icon={faPen}/></button>
                <button onClick={handleDeleteClick} title='delete' className="operation-button"><FontAwesomeIcon icon={faTrash} /></button>
                 <div style={{
                    position:"absolute",
                    marginLeft:"auto",
                    marginRight : "auto",
                    left: "0",
                    right:"0"
                 }} className={showDeletePage ? 'helper-div show' : "helper-div"}>
                 <DeleteConformation cards={cards} setCards={setCards} id={id} setShowDeletePage={setShowDeletePage}/>
                 </div>
            </div>
        </div>
    )
}

export default BookMarkCard