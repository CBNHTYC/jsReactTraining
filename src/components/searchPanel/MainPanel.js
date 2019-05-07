import React from "react";
import './css/MainPanel.css';
import Card from "./Card";
import FilterPanel from "./FilterPanel";
import RowCard from "./RowCard";

const BASE_URI = "http://localhost:8080/fc/rest";
const MOST_VIEWED_URI = "/getMostViewedPhoneList";
const GET_BY_PARAMS_URI = "/getPhones";
const PHONES = "phones";
let phoneTypeList = undefined;

let simpleParameter = [];
let rangeParameter = [];

class MainPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            changed: false,
            phones: undefined,
            ParametrizedQuery: [],
            isVenAcer: false,
            isVenFly: false,
            isTypeSmart: false,
            isTypePhone: false,
            isRam05: false,
            isRam1: false,
            isSim1: false,
            isSim2: false,
            priceBeg: undefined,
            priceEnd: undefined,
            accumBeg: undefined,
            accumEnd: undefined
        };
    };

    componentDidMount() {
        this.renderCardPanel();
    };

    togChSim1 = () => {
        this.setState(prevState => ({
            isSim1: !prevState.isSim1,
        }));
    };

    togChSim2 = () => {
        this.setState(prevState => ({
            isSim2: !prevState.isSim2,
        }));
    };

    togChRam05 = () => {
        this.setState(prevState => ({
            isRam05: !prevState.isRam05,
        }));
    };

    togChRam1 = () => {
        this.setState(prevState => ({
            isRam1: !prevState.isRam1,
        }));
    };

    togChVenAcer = () => {
        this.setState(prevState => ({
            isVenAcer: !prevState.isVenAcer,
        }));
    };

    togChVenFly = () => {
        this.setState(prevState => ({
            isVenFly: !prevState.isVenFly,
        }));
    };

    togChTypeSmart = () => {
        this.setState(prevState => ({
            isTypeSmart: !prevState.isTypeSmart,
        }));
    };

    togChTypePhone = () => {
        this.setState(prevState => ({
            isTypePhone: !prevState.isTypePhone,
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            changed: true
        });
        console.log("onSubmit");
        this.renderCardPanel();
    };

    onClear = (e) => {
        e.preventDefault();
        this.setState({
            isVenAcer: false,
            isVenFly: false,
            isTypeSmart: false,
            isTypePhone: false,
            isRam05: false,
            isRam1: false,
            isSim1: false,
            isSim2: false,
            priceBeg: undefined,
            priceEnd: undefined,
            accumBeg: undefined,
            accumEnd: undefined
        });
    };

    onChInpPriceBeg = (event) => {
        event.preventDefault();
        this.setState({priceBeg: event.target.value})
    };

    onChInpPriceEnd = (event) => {
        event.preventDefault();
        this.setState({priceEnd: event.target.value})
    };

    onChInpAccBeg = (event) => {
        event.preventDefault();
        this.setState({accumBeg: event.target.value})
    };

    onChInpAccEnd = (event) => {
        event.preventDefault();
        this.setState({accumEnd: event.target.value})
        console.log(this.state)
    };

    renderCardPanel = () => {
        console.log("renderCardPanel");

        simpleParameter = [];
        rangeParameter = [];
        let singleParam = {};
        let rangeParam = {};
        let changed = false;

        if (this.state.isRam05) {
            singleParam = {name: "ram", value: "0.5"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.isRam1) {
            singleParam = {name: "ram", value: "1"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.isVenFly) {
            singleParam = {name: "vendor", value: "Fly"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.isVenAcer) {
            singleParam = {name: "vendor", value: "Acer"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.isTypePhone) {
            singleParam = {name: "type", value: "Телефон"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.isTypeSmart) {
            singleParam = {name: "type", value: "Смартфон"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.isSim1) {
            singleParam = {name: "sim", value: "есть"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.isSim2) {
            singleParam = {name: "sim", value: "нет"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.priceBeg) {
            if (this.state.priceEnd) {
                rangeParam = {name: "price", valueBegin: this.state.priceBeg, valueEnd: this.state.priceEnd};
            } else {
                rangeParam = {name: "price", valueBegin: this.state.priceBeg, valueEnd: "190000"};
            }
            rangeParameter.push(rangeParam);
            changed = true;
        } else if (this.state.priceEnd) {
            rangeParam = {name: "price", valueBegin: "0", valueEnd: this.state.priceEnd};
            rangeParameter.push(rangeParam);
            changed = true;
        }

        if (this.state.accumBeg) {
            if (this.state.accumEnd) {
                rangeParam = {name: "price", valueBegin: this.state.accumBeg, valueEnd: this.state.accumEnd};
            } else {
                rangeParam = {name: "price", valueBegin: this.state.accumBeg, valueEnd: "190000"};
            }
            rangeParameter.push(rangeParam);
            changed = true;
        } else if (this.state.accumEnd) {
            rangeParam = {name: "price", valueBegin: "0", valueEnd: this.state.accumEnd};
            rangeParameter.push(rangeParam);
            changed = true;
        }

        this.setState({
            changed: changed
        });

        if (changed) {
            this.getByParams();
        } else {
            this.getDefault();
        }
    };

    getDefault = async () => {
        try {
            const apiUrl = await fetch(`${BASE_URI}${MOST_VIEWED_URI}`);
            const data = await apiUrl.json();
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
            });
        } catch (e) {
            console.log(e);
            return (
                <div>
                    <text>АШИПКА</text>
                </div>
            )
        }

    };

    getByParams = async () => {
        let query = {};
        if (simpleParameter.length > 0) {
            if (rangeParameter.length > 0) {
                query = {
                    simpleParameter,
                    rangeParameter
                }
            } else {
                query = {
                    simpleParameter
                }
            }
        } else if (rangeParameter.length > 0) {
            query = {
                rangeParameter
            }
        }

        console.log(JSON.stringify(query));
        console.log(`${BASE_URI}${GET_BY_PARAMS_URI}`);

        const apiUrl = await fetch(`${BASE_URI}${GET_BY_PARAMS_URI}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(query)
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
        });
        console.log(this.state.phones);
    };

    render() {
        return (
            <div className="container-fluid main">
                <div className="row main-row">
                    <div className="col-md-2">
                        <FilterPanel
                            foreingState={this.state}
                            onChInpPriceBeg={this.onChInpPriceBeg}
                            onChInpPriceEnd={this.onChInpPriceEnd}
                            togChVenAcer={this.togChVenAcer}
                            togChVenFly={this.togChVenFly}
                            togChTypePhone={this.togChTypePhone}
                            togChTypeSmart={this.togChTypeSmart}
                            togChRam05={this.togChRam05}
                            togChRam1={this.togChRam1}
                            onChInpAccBeg={this.onChInpAccBeg}
                            onChInpAccEnd={this.onChInpAccEnd}
                            togChSim1={this.togChSim1}
                            togChSim2={this.togChSim2}
                            onSubmit={this.onSubmit}
                            onClear={this.onClear}
                        />
                    </div>
                    <div className="col-md-8">
                        {!this.state.changed &&
                            <div className="row">
                                {this.state.phones}
                            </div>
                        }
                        {this.state.changed &&
                            this.state.phones
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPanel;