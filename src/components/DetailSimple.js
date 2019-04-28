import React from "react";

const DetailSimple = (props) => {
    return (
        <div>
            {props.id &&
            <div>
                <p>ID: {props.id}</p>
                <p>Name: {props.name}</p>
            </div>
            }
            {props.error &&
            <p>Error: {props.error}</p>
            }
        </div>
    );
};

export default DetailSimple;