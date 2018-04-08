import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card">
        <div className="imgContainer">
            <img alt={props.name} src={props.image} />
        </div>
        {/* <span onClick={() => props.shuffleImage(props.id)} className="shuffle">
            𝘅
        </span> */}
    </div>
);

export default ImageCard;