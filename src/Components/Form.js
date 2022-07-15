import React from 'react'

const Form = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header fw-bold">VISITOR'S FORM</div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Student's Name"
                />
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Student's Mobile No"
                />
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Student's Email ID"
                />
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Parent's Mobile No"
                />
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <textarea
                className="form-control"
                placeholder="Address"
              ></textarea>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Choose Your File"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <button className='btn btn-danger btn-rounded'>SUBMIT</button>
            </div>
            <div className="col-md-6 mb-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form