import React from 'react'
import '../styles/Form.css'

const InputField = ({placeholder, text, icon}) => {
    return (
        <span className="input-box-container">
            <span className="input-box-pretext">{text}</span>
            <input className="input-box" type="text" placeholder={placeholder} />
            {/* <span className="input-box-posticon"><i className={icon}></i></span> */}
        </span>
    )
}

function Form() {
    return (
        <div>
            <InputField icon="fa fa-search" text="What" placeholder="Job title, keywords, or company" />&nbsp;&nbsp;
            <InputField icon="fa fa-map-marker" text="Where" placeholder="City, state, or pin code" />&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="find-jobs-btn">Find jobs</button>
        </div>
    )
}

export default Form
