import React from "react";


class DetailValue extends React.Component {

    state = {
        detailValuesComponent: undefined
    };

    componentDidMount() {
        this.drawValue();
    };

    drawValue = () => {
        const ids = ['defaultCheck'];
        ids.push(this.props.detailName);
        this.setState({
            detailValuesComponent: this.props.valueList.map(item => {
                const tmpId = ids.concat();
                tmpId.push(item.value);
                return (
                    <li className="list-group-item">
                        <input className="form-check-input" type="checkbox" value=""
                               id={ids.join('')}/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            {item.value}
                        </label>
                    </li>
                )
            })
        })
    };

    drawValue = () => {
        props.valueList.map(item => {
            item.value
        })
    };

    return (

    );
}