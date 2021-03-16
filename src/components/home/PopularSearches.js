const SearchType = ({type}) => {
    return (
        <div className="button">
            <span className="search-icon"><i className="fa fa-search"></i></span>
            <button type="button">{type}</button>
        </div>
    )
}

const PopularSearches = () => {
    return (
        <div className="popular-search-container">
            <div className="popular-search-box">
                <span className="popular-search-text">Popular searches</span>
            </div>
            <div className="popular-search-category">
                <SearchType type={'Government'} />
            </div>
        </div>
    )
}

export default PopularSearches