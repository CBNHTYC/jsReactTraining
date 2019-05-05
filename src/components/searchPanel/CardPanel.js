import React from "react";
import Card from "./Card";
import RowCard from "./RowCard";

const BASE_URI = "http://localhost:8080/fc/rest";
const MOST_VIEWED_URI = "/getMostViewedPhoneList";
const GET_BY_PARAMS_URI = "/getPhones";
const PHONES = "phones";
let phoneTypeList = undefined;

let simpleParameter = [];
let rangeParameter = [];


class CardPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            modelId: undefined,
            ParametrizedQuery: [simpleParameter, rangeParameter],
            phones: undefined
        };
    };

    componentDidMount() {
        this.redraw();
    }

    redraw = async () => {
        if (!(this.props.changed)) {
            this.getDefault();
        }
        if (this.props.changed) {
            let singleParam = {};
            if (this.props.isRam05) {
                singleParam = {name: "ram", value: "0.5"};
                simpleParameter.push(singleParam)
            }
        }
    };

    getDefault = async () => {
        console.log("GBCZ");
        const apiUrl = await fetch(`${BASE_URI}${MOST_VIEWED_URI}`);
        const data = await apiUrl.json();
        console.log(data);
        phoneTypeList = data.phoneTypeList.map(item => item);
        this.setState({
            phones: phoneTypeList.map(phone => {
                return (
                    <Card
                        id={phone.model.modelId}
                        vendor={phone.model.vendor}
                        model={phone.model.modelName}
                        description={phone.model.description}
                    />
                )
            })
        })
    };

    getByParams = async () => {
        const apiUrl = await fetch(`${BASE_URI}${GET_BY_PARAMS_URI}`, {
            method: 'get',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state.ParametrizedQuery)
        });

        const data = await apiUrl.json();
        console.log(data);
        phoneTypeList = data.phoneTypeList.map(item => item);
        this.setState({
            phones: phoneTypeList.map(phone => {
                return (
                    <RowCard
                        id={phone.model.modelId}
                        vendor={phone.model.vendor}
                        model={phone.model.modelName}
                        description={phone.model.description}
                        price={phone.model.price}
                    />
                )
            })
        })
    };

    getById = async () => {

    };

    render() {
        return (
            <div>
                <div className="row">
                    {this.state.phones}
                </div>
            </div>
        );
    }
}

export default CardPanel;