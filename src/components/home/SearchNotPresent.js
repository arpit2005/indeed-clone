const SearchNotPresent = () => {
    return (
        <div className="search-history-container">
            <div className="no-search-container">
                <span className="no-search-text">You don't have any recent searches.</span>&nbsp;&nbsp;
                <span className="no-search-undo-text">Undo</span>
            </div>
        </div>
    )
}

export default SearchNotPresent