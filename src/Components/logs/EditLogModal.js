import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";
const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please Enter a Message and Tech" });
    } else {
      const log = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(log);

      M.toast({ html: `Log Updated By ${tech}` });
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-fielf">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => {
                setTech(e.target.value);
              }}
            >
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => {
                    setAttention(!attention);
                  }}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};
EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, { updateLog })(EditLogModal);
