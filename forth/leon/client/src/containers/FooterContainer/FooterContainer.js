import React from "react";
import { connect } from "react-redux";

import { getUsersAction, deleteUsersAction } from "../../actions/actions";

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsersAction()),
    deleteUsers: () => dispatch(deleteUsersAction()),
});

const FooterContainer = (props) => {
    return (
        <div>
            <div id="getUsersBtn" onClick={props.getUsers}>Get Users</div>
            <div id="deleteUsers" onClick={props.deleteUsers}>Delete Users</div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(FooterContainer);