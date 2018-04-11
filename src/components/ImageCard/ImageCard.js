import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card">
        <div className="imgContainer">
            <img alt={props.name} src={props.image} onClick={() => props.imgClick(props.id)} />
        </div>
    </div>
);

export default ImageCard;