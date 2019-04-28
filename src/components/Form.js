import React from "react";

const Form = props => (
    <form onSubmit={props.getDetails}>
        <input type="text" name="type" placeholder="Тип"/>
        <button>Получить список характеристик</button>
    </form>
);

export default Form;