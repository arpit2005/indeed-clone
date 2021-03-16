import React from 'react'

function JobDetailsPanel() {
    return (
        <div className="job-details-container">
            <div className="header">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <span><img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/12cbbe5e431feb962493943cf78f1f52" alt="logo" style={{ width: 50, margin: 12 }} /></span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Recruitment Operations Manager</span>
                        <span>Allegis Global Solutions</span>
                        <span>Bengaluru, Karnataka</span>
                    </div>
                </div>
                <div>
                    <span><button type="button" style={{ background: '#164081', color: 'white', padding: 10, paddingLeft: 20, paddingRight: 20, marginLeft: 10, border: 'none', outline: 'none', borderRadius: 10, fontSize: 18 }}>Apply Now</button></span>
                    <span><i className="fa fa-heart" /></span>
                </div>
            </div>
        </div>
    )
}

export default JobDetailsPanel
