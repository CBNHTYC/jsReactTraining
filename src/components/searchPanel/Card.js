import React from "react";
import './css/Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={require(`../../img/jpg/${props.imgLocation}`)} className="card-img" alt="..."/>
                <h5 className="card-title">{props.vendor} {props.model}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">
                    <small className="text-muted">{props.price}</small>
                </p>
                <form onSubmit={props.getPhoneInfo}>
                    <button className="btn btn-outline-dark">Подробнее</button>
                    <input type="text" name="id" defaultValue={props.id} hidden={true}/>
                </form>
            </div>
        </div>
    );
};

export default Card;