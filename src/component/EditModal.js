import React from "react";

const EditModal = ({handleClose}) => {
  return (
    <div className="modal d-block" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
              <label>User Name</label>
              <input className="form-control my-3"  placeholder="Enter your name"/>
              <label>User Email</label>
              <input className="form-control my-3" placeholder="Enter your email" />
              <label>User Mobile</label>
              <input className="form-control my-3" placeholder="Enter your mobile" />
              
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
