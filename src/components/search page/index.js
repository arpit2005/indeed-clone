import React from 'react'
import '../../styles/SearchPage.css'
import Form from '../Form'
import FilterButton from './FilterButton'
import JobList from './JobList'
import JobDetailsPanel from './JobDetailsPanel'

function SearchPage() {
    return (
        <div className="search-page-container">
            <div className="search-form-container">
                <Form />
            </div>
            <br />
            <div>
                <FilterButton type="Date Posted" />
                <FilterButton type="Date Posted" />
                <FilterButton type="Date Posted" />
                <FilterButton type="Date Posted" />
                <FilterButton type="Date Posted" />
                <FilterButton type="Date Posted" />
                <FilterButton type="Date Posted" />
            </div>
            <hr style={{ width: '99%', opacity: '0.1', marginTop: 18 }} />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="job-list-div">
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList /> 
                </div>
                <div className="job-details-div">
                    <JobDetailsPanel />
                </div>
            </div>
        </div>
    )
}

export default SearchPage
