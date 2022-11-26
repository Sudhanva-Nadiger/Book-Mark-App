import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SearchBar = () => {
    const [searchQuery , setSearchQuery] = useState("");
    return (
        <>
            <div className='search-bar'>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" className="search-text" placeholder='search book mark..' />
            </div>
            <div className="btn-wrapper">
                <button className='search-btn'>Search by title</button>
                <button className='search-btn'>Search by tag</button>
            </div>
        </>
    )
}

export default SearchBar