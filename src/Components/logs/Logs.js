import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../Layouts/Spinner";
import LogItem from "./LogItem";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {loading || logs === null ? (
        <Spinner />
      ) : (
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">System Logs</h4>
          </li>
          {!loading && logs.length === 0 ? (
            <p className="center">No Logs To Show..</p>
          ) : (
            logs.map((log) => <LogItem key={log.id} log={log} />)
          )}
        </ul>
      )}
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
