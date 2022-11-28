import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({cards,setSearchResult,setShowSearchResults,searchQuery,setSearchQuery}) => {

    function handleSearchByTitle(){
         const result = cards.filter((card)=>{
            if(searchQuery === ""){
                return card;
            }
            else if(card.bookmarkTitle.toLowerCase().includes(searchQuery.toLowerCase())){
                return card;
            }

            return null
         })

         setSearchResult(result);
         setShowSearchResults(true);
    }

    function handleSerachByTag(){
        const result = cards.filter((card)=>{
            if(searchQuery === ""){
                return card;
            }
            let arr = card.bookmarkTags;
            for(let i = 0; i < arr.length; i++){
                if(arr[i].toLowerCase().includes(searchQuery.toLowerCase())){
                    return card;
                }
            }

            return null
         })

         setSearchResult(result);
         setShowSearchResults(true);
    }

    return (
        <>
            <div className='search-bar'>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" className="search-text" placeholder='search book mark..' />
            </div>
            <div className="btn-wrapper">
                <button onClick={handleSearchByTitle} name="title" className='search-btn'>Search by title</button>
                <button onClick={handleSerachByTag} name="tag" className='search-btn'>Search by tag</button>
            </div>
        </>
    )
}

export default SearchBar