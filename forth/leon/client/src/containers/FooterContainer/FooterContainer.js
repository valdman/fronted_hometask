import React from "react";

import getUsers from "../../fetchUtils/getUsers";
import deleteUsers from "../../fetchUtils/deleteUsers";

const FooterContainer = () => {
    return (
    <div>
        <div id="getUsersBtn" onClick={getUsers}>Get Users</div>
        <div id="deleteUsers" onClick={deleteUsers}>Delete Users</div>
    </div>
    );
}

export default FooterContainer;