import React from 'react';
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import './search-panel.css';

const SearchPanel = () => {

    const searchText = 'Type to search';

    return (
        <div className='search-panel'>
            <input type="text"
                   className="form-control search-input"
                   placeholder={searchText}/>
            <ItemStatusFilter/>
        </div>
    );
};

export default SearchPanel;