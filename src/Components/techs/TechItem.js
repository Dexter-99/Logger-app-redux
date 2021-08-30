import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTechs } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";
const TechItem = ({ tech, deleteTechs }) => {
  const handleDelete = () => {
    const name = tech.fname + " " + tech.lname;
    deleteTechs(tech.id);
    M.toast({ html: `Technician ${name} deleted` });
  };
  return (
    <li className="collection-item">
      <div>
        {tech.fname} {tech.lname}
        <a href="3!" onClick={handleDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechs: PropTypes.func.isRequired,
};

export default connect(null, { deleteTechs })(TechItem);
