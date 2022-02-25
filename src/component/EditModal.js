import React, { useEffect, useState } from "react";

const EditModal = ({ editData, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    setName(editData.name);
    setEmail(editData.email);
  }, [editData]);

  console.log(editData);
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
            <input
              className="form-control my-3"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <label>User Email</label>
            <input
              className="form-control my-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <label>User Mobile</label>
            <input
              className="form-control my-3"
              placeholder="Enter your mobile"
            />
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
