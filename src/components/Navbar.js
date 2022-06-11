import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return(
    <nav>
        <FontAwesomeIcon className="globe-icon" icon={faGlobeAsia} /> 
        <h3>my travel journal.</h3>
    </nav>
    )
}