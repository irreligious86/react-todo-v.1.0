import React from 'react';
import './search-panel.css';

const SearchPanel = () => {

    const searchText = 'Type to search';

    return (
        <div className='search-panel'>
            <input type="text"
                   className="form-control search-input"
                   placeholder={searchText}/>
        </div>
    );
};

export default SearchPanel;