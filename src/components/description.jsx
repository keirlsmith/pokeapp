import React, {useState} from "react";
import description from "./description";

const PokeThumbnail = ({
    id,
    name,
    type,
    height,
    weight,
    stat1,
    stat2,
    stat3,
    stat4,
    stat5,
    stat6,
    bs1,
    bs2,
    bs3,
    bs4,
    bs5,
    bs6,
}) => {
    const style = `thumb-container ${type}`;
    const [show, setShow] = useState(false);
    return (
        <div className={style}>
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper"></div>
        </div>
    )
}