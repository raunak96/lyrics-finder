import React from "react";
import Loader from "../assets/spinner.gif";
const Spinner = () => {
    return (
        <img
            src={Loader}
            alt="Loading..."
            style={{ display: "block", width: "20%", margin: "30vh auto" }}
        />
    );
};

export default Spinner;
