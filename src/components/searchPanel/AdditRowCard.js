import React from "react";
import './css/Card.css';
import RowCard from "./RowCard";

class AdditRowCard extends React.Component{

    constructor() {
        super();
        this.state = {
            rows: undefined,
        };
    };

    componentDidMount() {
        this.setRows();
    };

    setRows = () => {
        this.setState({
            rows: this.props.typeList.map(phone => {
                return (
                    <RowCard
                        id={phone.model.modelId}
                        vendor={phone.model.vendor}
                        model={phone.model.modelName}
                        description={phone.model.description}
                        price={phone.model.price}
                        imgLocation={phone.images.imageLocationList[0]}
                        getPhoneInfo={this.getPhoneInfo}
                    />
                )
            })
        });
    };

    render () {
        return (
            <div>
                <h1>Поиск не дал результатов</h1>
                <h4>Возможно, Вам подойдут следующие продукты:</h4>
                {this.state.rows}
            </div>
        );
    }
}

export default AdditRowCard;