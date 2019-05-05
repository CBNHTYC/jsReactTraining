import React from "react";
import './css/MainPanel.css';
import CardPanel from './CardPanel'

class MainPanel extends React.Component {

    constructor() {
        super();
        this.state = {
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
        document.getElementsByClassName("form-check-input").checked = false;
        document.getElementsByClassName("form-control").value = "";
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
    };

    getPhones = (event) => {

    };

    render() {
        return (
            <div className="container-fluid main">
                <div className="row main-row">
                    <div className="col-md-2">
                        <div>
                            <div className="accordion" id="accordionExample">
                                <form>
                                    <div className="detailName">
                                        <div className="card-header" id="headingPrice">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapsePrice" aria-expanded="true"
                                                        aria-controls="collapsePrice">
                                                    Цена
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsePrice" className="collapse" aria-labelledby="headingPrice"
                                             data-parent="#accordionExample">
                                            <div className="parameter-list scrollable">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <label className="sr-only" htmlFor="inlineFormInputGroup">Имя
                                                            пользователя</label>
                                                        <div className="input-group mb-2">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">От</div>
                                                            </div>
                                                            <input type="text" className="form-control"
                                                                   name="inputPriceBeg"
                                                                   id="inputPriceBeg"
                                                                   placeholder="0"
                                                                   defaultValue=""
                                                                   onChange={this.onChInpPriceBeg}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="sr-only" htmlFor="inlineFormInputGroup">Имя
                                                            пользователя</label>
                                                        <div className="input-group mb-2">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">До</div>
                                                            </div>
                                                            <input type="text" className="form-control"
                                                                   name="inputPriceEnd"
                                                                   id="inputPriceEnd"
                                                                   placeholder="190000"
                                                                   defaultValue=""
                                                                   onChange={this.onChInpPriceEnd}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detailName">
                                        <div className="card-header" id="headingVendor">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseVendor" aria-expanded="true"
                                                        aria-controls="collapseVendor">
                                                    Производитель
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseVendor" className="collapse" aria-labelledby="headingVendor"
                                             data-parent="#accordionExample">
                                            <div className="parameter-list scrollable">
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           checked={this.state.isVenAcer}
                                                           onChange={this.togChVenAcer} id="checkVenAcer"/>
                                                    <label className="form-check-label" htmlFor="checkVenAcer">
                                                        Acer
                                                    </label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           checked={this.state.isVenFly}
                                                           onChange={this.togChVenFly} id="checkVenFly"/>
                                                    <label className="form-check-label" htmlFor="checkVenFly">
                                                        Fly
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detailName">
                                        <div className="card-header" id="headingType">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseType" aria-expanded="true"
                                                        aria-controls="collapseType">
                                                    Тип
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseType" className="collapse" aria-labelledby="headingType"
                                             data-parent="#accordionExample">
                                            <div className="parameter-list scrollable">
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           checked={this.state.isTypePhone}
                                                           onChange={this.togChTypePhone} id="checkTypePhone"/>
                                                    <label className="form-check-label" htmlFor="checkTypePhone">
                                                        Телефон
                                                    </label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           checked={this.state.isTypeSmart}
                                                           onChange={this.togChTypeSmart} id="checkTypeSmart"/>
                                                    <label className="form-check-label" htmlFor="checkTypeSmart">
                                                        Смартфон
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detailName">
                                        <div className="card-header" id="headingRam">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseRam" aria-expanded="true"
                                                        aria-controls="collapseRam">
                                                    ОЗУ
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseRam" className="collapse" aria-labelledby="headingRam"
                                             data-parent="#accordionExample">
                                            <div className="parameter-list scrollable">
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           checked={this.state.isRam05}
                                                           onChange={this.togChRam05} id="checkRam05"/>
                                                    <label className="form-check-label" htmlFor="checkRam05">
                                                        0.5
                                                    </label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           checked={this.state.isRam1}
                                                           onChange={this.togChRam1} id="checkRam1"/>
                                                    <label className="form-check-label" htmlFor="checkRam1">
                                                        1
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detailName">
                                        <div className="card-header" id="headingAccum">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseAccum" aria-expanded="true"
                                                        aria-controls="collapseAccum">
                                                    Аккумулятор
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseAccum" className="collapse" aria-labelledby="headingAccum"
                                             data-parent="#accordionExample">
                                            <div className="parameter-list scrollable">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <label className="sr-only" htmlFor="inlineFormInputGroup">Имя
                                                            пользователя</label>
                                                        <div className="input-group mb-2">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">От</div>
                                                            </div>
                                                            <input type="text" className="form-control"
                                                                   name="inputAccumBeg"
                                                                   id="inputAccumBeg"
                                                                   placeholder="0"
                                                                   defaultValue=""
                                                                   onChange={this.onChInpAccBeg}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label className="sr-only" htmlFor="inlineFormInputGroup">Имя
                                                            пользователя</label>
                                                        <div className="input-group mb-2">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">До</div>
                                                            </div>
                                                            <input type="text" className="form-control"
                                                                   name="inputAccumEnd"
                                                                   id="inputAccumEnd"
                                                                   placeholder="190000"
                                                                   defaultValue=""
                                                                   onChange={this.onChInpAccEnd}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detailName">
                                        <div className="card-header" id="headingSim">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseSim" aria-expanded="true"
                                                        aria-controls="collapseSim">
                                                    Кол-во sim
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseSim" className="collapse" aria-labelledby="headingSim"
                                             data-parent="#accordionExample">
                                            <div className="parameter-list scrollable">
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           checked={this.state.isSim1}
                                                           onChange={this.togChSim1} id="checkSim1"/>
                                                    <label className="form-check-label" htmlFor="checkSim1">
                                                        1
                                                    </label>
                                                </li>
                                                <li className="list-group-item">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           checked={this.state.isSim2}
                                                           onChange={this.togChSim2} id="checkSim2"/>
                                                    <label className="form-check-label" htmlFor="checkSim2">
                                                        2
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group" onClick={this.onSubmit}>
                                        <button className="btn btn-dark">
                                            Принять
                                        </button>
                                        <button className="btn btn-outline-dark right" onClick={this.onClear}>
                                            Сброс
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <CardPanel params={this.state}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPanel;