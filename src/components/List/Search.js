import React from 'react';

const Search = ({searchChange, type}) =>{

    return(
        <div className="search-container">
            <input 
                type='text' 
                placeholder={`Search ${type}`} 
                className="search-box"
                onChange={searchChange} />
        </div>
    );
}

export default Search;