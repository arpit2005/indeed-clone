import React from 'react'
import PropTypes from 'prop-types'

function JobList({ showPanel }) {
    return (
        <div className="job-list-container" onClick={showPanel}>
            <span className="ellipsis"><i className="fa fa-ellipsis-v" style={{ clear: 'right' }}></i></span>
            <div className="job-container">
                <div style={{ fontSize: 12, color: 'green' }}>new</div>
                <div style={{ fontSize: 19, fontWeight: 600 }}>Marketing Executive (Government Department)</div>
                <div>Trom Industries Limited</div>
                <div>Gandhinagar, Gujarat</div>
                <div style={{ fontWeight: 600 }}>&#8377;45,000 a month</div>
                <div style={{ marginTop: 10, fontSize: 15 }}><i className="fa fa-paper-plane" style={{ marginRight: 15 }} />Apply securely with Indeed Resume</div>
                {/* <div>Responsive Employer</div> */}
                {/* <div style={{ marginTop: 10, fontSize: 14 }}>Description Supervise the day-to-day operations of the team members including but not limited to: a. Ensure appropriate resource allocation to successfully implement and execute project plans to achieve agreed upon service levels. b. Manage the workload balance within their team and participate in resource management across all global teams. c. Ensure the consistent implementation, use, and review of SOPs. d. Coordinate and monitor progress to ensure achievement of Site Initiation & Kit Inventory Center objectives. e. Implement, monitor, and report performance metrics and take corrective action when appropriate. f. Initiate educational sessions with team members and others as needed. g. Ensure consistency and implementation of global processes and procedures. h. Conduct timely performance review and monthly meetings to provide feedback to employees. i. Manage delivery KPIs and implementation and execution of initiatives defined by senior leadership. j. Coach and mentor team members for implementation of Individual Development Plans. k. Establish cross-functional mechanisms to increase communication, accountability, and understanding of deliverables globally/locally.</div>                 */}
            </div>
            <div style={{ position: 'absolute', bottom: 20, left: 15, fontSize: 13, color: 'rgba(0,0,0,0.6)' }}>Just posted</div>
        </div>
    )
}

JobList.propTypes = {
    showPanel: PropTypes.func
}

export default JobList
