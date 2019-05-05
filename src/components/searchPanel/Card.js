import React from "react";
import './css/Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={require('../../img/fruit.jpg')} className="card-img" alt="..."/>
                <h5 className="card-title">{props.vendor} {props.model}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-outline-dark">Подробнее</a>
            </div>
        </div>
    );
};

export default Card;