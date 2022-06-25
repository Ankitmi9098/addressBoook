//write validation here

import React from "react";

const Validation =(props) => {
    if (props.errMsg === ""){
        return null;
    }
    return <React.Fragment>
        <span>{props.errMsg}</span>
    </React.Fragment>
}

export default Validation;