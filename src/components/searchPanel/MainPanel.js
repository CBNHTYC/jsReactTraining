import React from "react";
import './css/MainPanel.css';
import Card from "./Card";
import FilterPanel from "./FilterPanel";
import RowCard from "./RowCard";
import Head from "../Head";
import PhoneInfo from "./PhoneInfo";
import Sort from "./Sort";
import AccessInfo from "./AccessInfo";
import AdditRowCard from "./AdditRowCard";

const SORT_PRICE_UP = "priceUp";
const SORT_PRICE_DOWN = "priceDown";
const SORT_NAME_UP = "nameUp";
const SORT_NAME_DOWN = "nameDown";
const SORT_VIEWS_UP = "viewsUp";
const SORT_VIEWS_DOWN = "viewsDown";


const BASE_URI = "http://localhost:8080/fc/rest";
const MOST_VIEWED_URI = "/getMostViewedPhoneList";
const GET_BY_PARAMS_URI = "/getPhones";
const PHONES = "phones";
const DEFAULT_IMG_LOC = "../../img/jpg";
let accessTypeList = undefined;

let simpleParameter = [];
let rangeParameter = [];

class MainPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            changed: false,
            phoneTypeList: undefined,
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
        console.log("onSub");
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
        this.setState({accumEnd: event.target.value});
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
            singleParam = {name: "sim", value: "нет"};
            simpleParameter.push(singleParam);
            changed = true;
        }

        if (this.state.isSim2) {
            singleParam = {name: "sim", value: "есть"};
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
            accessTypeList = data.phoneTypeList.map(item => item);
            this.setState({
                phones: accessTypeList.map(phone => {
                    return (
                        <Card
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
        try {
            accessTypeList = data.phoneTypeList.map(item => item);
            if (accessTypeList.length > 0) {
                this.setState({
                    phoneTypeList: accessTypeList,
                    phones: accessTypeList.map(phone => {
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
            }
        } catch (e) {
        }
        try {
            let additTypeList = data.additionalList.map(item => item);
            if (additTypeList.length > 0) {
                this.setState({
                    phoneTypeList: additTypeList,
                    phones:
                        <AdditRowCard
                            typeList={additTypeList}
                        />
                });
            }
        } catch (e) {
        }
        console.log(this.state.phones);
    };

    getPhoneInfo = async (event) => {
        event.preventDefault();
        const id = event.target.elements.id.value;
        const apiUrl = await fetch(`${BASE_URI}/phone?id=${id}`);
        const data = await apiUrl.json();
        accessTypeList = data.phoneTypeList.map(item => item);
        this.setState({
            phones: accessTypeList.map(phone => {
                return (
                    <PhoneInfo
                        id={phone.model.modelId}
                        vendor={phone.model.vendor}
                        model={phone.model.modelName}
                        description={phone.model.description}
                        price={phone.model.price}
                        detailList={phone.details}
                        imageList={phone.images.imageLocationList}
                        getAccessInfo={this.getAccessInfo}
                        accessoryList={phone.accessories}
                    />
                )
            })
        });
    };

    getAccessInfo = async (event) => {
        event.preventDefault();
        const id = event.target.elements.id.value;
        const apiUrl = await fetch(`${BASE_URI}/accessory?id=${id}`);
        console.log("lkjlkb");
        const data = await apiUrl.json();
        accessTypeList = data.phoneTypeList.map(item => item);
        console.log("getaccessInfo");
        this.setState({
            phones: accessTypeList.map(access => {
                return (
                    <AccessInfo
                        id={access.model.modelId}
                        vendor={access.model.vendor}
                        model={access.model.modelName}
                        description={access.model.description}
                        price={access.model.price}
                        detailList={access.details}
                        imageList={access.images.imageLocationList}
                    />
                )
            })
        });
    };

    searchPhone = async (event) => {
        console.log("searchPhone");
        event.preventDefault();
        const textQuery = event.target.elements.searchField.value;
        const apiUrl = await fetch(`${BASE_URI}/search?query=${textQuery}`);
        const data = await apiUrl.json();
        accessTypeList = data.phoneTypeList.map(item => item);
        console.log("phonesSearched");
        this.setState({
            phoneTypeList: accessTypeList,
            phones: accessTypeList.map(phone => {
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
            }),
            changed: true
        });
    };

    dynamicSort(group, field) {
        let sortOrder = 1;
        if (field[0] === "-") {
            sortOrder = -1;
            field = field.substr(1);
        }
        return function (a, b) {
            let result = (a[group][field] < b[group][field]) ? -1 : (a[group][field] > b[group][field]) ? 1 : 0;
            return result * sortOrder;
        }
    };

    sortRowPhones = (type, event) => {
        event.preventDefault();
        console.log("sortRowPhones");
        let sortedList;
        let sorted = false;

        if (type === SORT_PRICE_UP) {
            let phoneTypeList = this.state.phoneTypeList;
            sortedList = phoneTypeList.sort(this.dynamicSort("model", "price"));
            sorted = true;
        }

        if (type === SORT_PRICE_DOWN) {
            let phoneTypeList = this.state.phoneTypeList;
            sortedList = phoneTypeList.sort(this.dynamicSort("model", "-price"));
            sorted = true;
        }

        if (type === SORT_NAME_UP) {
            let phoneTypeList = this.state.phoneTypeList;
            sortedList = phoneTypeList.sort(this.dynamicSort("model", "fullName"));
            sorted = true;
        }

        if (type === SORT_NAME_DOWN) {
            let phoneTypeList = this.state.phoneTypeList;
            sortedList = phoneTypeList.sort(this.dynamicSort("model", "-fullName"));
            sorted = true;
        }

        if (type === SORT_VIEWS_DOWN) {
            console.log("SORT_VIEWS_DOWN");
            let phoneTypeList = this.state.phoneTypeList;
            sortedList = phoneTypeList.sort(this.dynamicSort("model", "-views"));
            sorted = true;
        }

        if (sorted) {
            this.setState({
                phones: sortedList.map(phone => {
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
        }
    };

    render() {
        return (
            <div>
                <Head
                    searchPhone={this.searchPhone}
                />
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
                        <div className="col-md-9">
                            {!this.state.changed &&
                            <div className="row">
                                {this.state.phones}
                            </div>
                            }
                            {this.state.changed &&
                            <Sort
                                sort={this.sortRowPhones}
                                priceUp={SORT_PRICE_UP}
                                priceDown={SORT_PRICE_DOWN}
                                nameUp={SORT_NAME_UP}
                                nameDown={SORT_NAME_DOWN}
                                viewsUp={SORT_VIEWS_UP}
                                viewsDown={SORT_VIEWS_DOWN}
                            />
                            }
                            {this.state.changed &&
                            this.state.phones
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPanel;