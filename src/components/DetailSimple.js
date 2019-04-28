import React from "react";

const DetailSimple = (props) => {
    return (
        <div className="infoWeath">
            {props.id &&
            <div>
                <p>ID: {props.id}</p>
                <p>Name: {props.name}</p>
            </div>
            }
            {props.error &&
            <p className="error">Error: {props.error}</p>
            }
        </div>
    );
};

export default DetailSimple;