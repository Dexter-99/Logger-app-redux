import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  if (loading || techs === null) return null;
  return techs.map((t) => (
    <option key={t.id} value={t.fname + " " + t.lname}>
      {t.fname + " " + t.lname}
    </option>
  ));
};
TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
