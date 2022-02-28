import React from "react";

const Feature = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center my-3">
            {" "}
            Manage the list of feature or permission
          </h3>

          <div>
            <div className="row">
              <div className="col-sm-6">
                <div className=" bg-info p-3">
                  <h3>Feature</h3>
                  <div className="form-check form-switch ">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    >
                      Portfolio
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked
                    />
                  </div>
                  <div className="form-check form-switch ">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    >
                      Transportation
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    //   checked
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 ">
                <div className="bg-info p-3">
                  <h3>Permission</h3>
                  <div className="form-check form-switch ">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    >
                      Admin
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    //   checked
                    />
                  </div>
                  <div className="form-check form-switch ">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    >
                      User
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    //   checked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
