import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

// import Spinner from "../Layouts/Spinner";
const TechListModal = ({ tech: { techs, tech_loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  // if (tech_loading || techs === null) {
  // return <Spinner />;
  // }
  return (
    <div id="tech-list-modal" className=" modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!tech_loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
