import React, { useState } from 'react'
import '../../styles/SearchPage.css'
import Form from '../Form'
import FilterButton from './FilterButton'
import JobList from './JobList'
import JobDetailsPanel from './JobDetailsPanel'

const mailPanel = (
    <div style={{ width: 320, height: 300, border: '1px solid rgba(0,0,0,0.2)', position: 'sticky', top: 10 }}>
        <div style={{ height: 80, borderBottom: '1px solid rgba(0,0,0,0.2)', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, fontSize: 14 }}>Get new jobs for this search by email</span>
        </div>
        <div style={{ paddingLeft: 30, paddingTop: 10, paddingRight: 30 }}>
            <span style={{ fontSize: 13, display: 'block' }}>Email address</span>
            <input type="text" style={{ display: 'block', paddingLeft: 10, paddingRight: 10, paddingTop: 7, paddingBottom: 7, width: 200, marginTop: 5, borderRadius: 7, border: '1px solid rgba(0,0,0,0.5)', outline: 'none' }} />
            <button style={{ marginTop: 25, paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, background: 'transparent', outline: 'none', border: '1px solid rgba(0,0,0,0.5)', borderRadius: 10, fontSize: 13, color: '#164081', fontWeight: 600 }}>Activate</button>
            <span style={{ fontSize: 11, display: 'block', marginTop: 15, opacity: 0.7 }}>By creating a job alert, you agree to our Terms. You can change your consent settings at any time by unsubscribing or as detailed in our terms.</span>
        </div>
    </div>
)

function SearchPage() {
    const [detailPanelShow, setDetailPanelShow] = useState(false)
    const [mailPanelShow, setMailPanelShow] = useState(true)

    const showPanel = () => {
        setDetailPanelShow(!detailPanelShow)
        setMailPanelShow(!mailPanelShow)
    }

    return (
        <div className="search-page-container">
            <div className="search-form-container">
                <Form page="search" /> 
            </div>
            <br />
            <div>
                <FilterButton type="Date Posted" />
                <FilterButton type="Remote" />
                <FilterButton type="Salary Esimate" />
                <FilterButton type="Job Type" />
                <FilterButton type="Education Level" />
                <FilterButton type="Sales Skills" />
                <FilterButton type="Location" />
                <FilterButton type="Company" />
            </div>
            <hr style={{ width: '99%', opacity: '0.1', marginTop: 18 }} />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="job-list-div">
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} />
                    <JobList showPanel={showPanel} /> 
                </div>
                <div className="job-details-div">
                    {mailPanelShow && mailPanel}
                    {detailPanelShow && <JobDetailsPanel showPanel={showPanel} />}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
