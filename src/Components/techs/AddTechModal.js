import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";
import PropTypes from "prop-types";

const AddTechModal = ({ addTech }) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const onSubmit = () => {
    if (first_name === "" || last_name === "") {
      M.toast({ html: "Please Enter a First and Last Name" });
    } else {
      const new_tech = {
        fname: first_name,
        lname: last_name,
      };
      addTech(new_tech);
      M.toast({ html: `New Technician ${first_name} ${last_name} added` });
      // Clear Fields
      setFirstName("");

      setLastName("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={first_name}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label htmlFor="firstName">Enter First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={last_name}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <label htmlFor="lastName"> Enter Last Name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-blue btn blue"
        >
          Enter
        </a>
      </div>
    </div>
  );
};
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};
export default connect(null, { addTech })(AddTechModal);
