import React from 'react'
import FilterButton from './FilterButton'
import PropTypes from 'prop-types'

function JobDetailsPanel({showPanel}) {
    return (
        <div className="job-details-container">
            <div className="header">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <span style={{ position: 'absolute', right: 10, top: 5, opacity: 0.7, cursor: 'pointer' }} onClick={showPanel}><i className="fa fa-times" /></span>
                    <span><img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/12cbbe5e431feb962493943cf78f1f52" alt="logo" style={{ width: 50, margin: 12 }} /></span>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <span style={{ fontWeight: 600, fontSize: 18 }}>Recruitment Operations Manager</span>
                        <span style={{ fontSize: 13 }}>Allegis Global Solutions - Bengaluru, Karnataka</span>
                        <span style={{ fontSize: 13 }}>&#8377;</span>
                    </div>
                </div>
                <div style={{ marginTop: 5 }}>
                    <span><button type="button" style={{ background: '#164081', color: 'white', padding: 8, paddingLeft: 19, paddingRight: 19, marginLeft: 10, border: 'none', outline: 'none', borderRadius: 10, fontSize: 18, cursor: 'pointer' }}>Apply Now &nbsp;&nbsp;<i className="fa fa-check" style={{ opacity: 0.6 }} /></button></span>
                    &nbsp;&nbsp;<FilterButton type={<i className="fa fa-heart" style={{ fontSize: 20 }} />} />
                </div>
            </div>
        </div>
    )
}

JobDetailsPanel.propTypes = {
    showPanel: PropTypes.func
}

export default JobDetailsPanel
