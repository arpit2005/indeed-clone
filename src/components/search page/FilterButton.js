import React from 'react'

function FilterButton({type}) {
    return (
        <div className="filter-button" onClick={() => console.log('clicked')}>            
            <button type="button">{type}</button>
            <span className="caret-icon"><i className="fa fa-caret-down"></i></span>
        </div>
    )
}

export default FilterButton
