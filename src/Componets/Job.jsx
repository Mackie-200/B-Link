import React from 'react'
import "./Job.css"

const Job = () => {
  return (
    <div className="container itemTeams">
      <div className="row container">
        <div className="col-sm-12 col-md-6 imageItems">
          <h3>You Have A Job For Us?</h3>
          <p>If you have a job opportunity in the construction industry, we want to hear from you! Use the form below to share the details of your project, and let us help you connect with the right professionals. Your submission can make a difference in finding the perfect candidates to get the job done!</p>
          <div className="orange">
            <button className="btn">
              Post job
            </button>
            <p>→</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 imageJob"></div>
      </div>
    </div>
  )
}

export default Job

