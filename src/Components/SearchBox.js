import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-light-green'
                type="search"
                placeholder="Type username"
                onChange={searchChange}
            ></input>;
        </div>
    );
}

export default SearchBox;