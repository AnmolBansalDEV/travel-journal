import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function Travel(props){
    return(<section>
            <div className="card">
            <img src={props.imageUrl} alt={`${props.title},${props.location}`} />
            <div className="info">
                <div className="location" >
            <FontAwesomeIcon className="location-pin" icon={faLocationDot} />
            <span className="location-name">{props.location}</span>
            <a className="location-map" target="_blank" rel="noopener noreferrer" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="title">{props.title}</h1>
            <h2 className="date">{`${props.startDate} - ${props.endDate}`}</h2>
            <p className="desc">
                {props.description}
            </p>
            </div>
            </div>
            <hr />
            </section>
        )
}