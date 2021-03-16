import React from 'react'
import '../../styles/Home.css'
import Form from '../Form'
import PopularSearches from './PopularSearches'
import SearchesPresent from './SearchesPresent'
import SearchNotPresent from './SearchNotPresent'

function Home() {
    return (
        <div className="homepage">
            <Form />
            <div className="employer-text">
                <span className="employer-text-highlighted">Employers: Post a job</span> - Your next hire is here
                </div>
                <SearchesPresent />
                {/* <SearchNotPresent /> */}
                {/* <PopularSearches /> */}
        </div>
    )
}

export default Home
