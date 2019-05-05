import React from "react";
import './css/Card.css';

const RowCard = (props) => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={require('../../img/fruit.jpg')} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.vendor} {props.model}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">
                            <small className="text-muted">{props.price}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RowCard;