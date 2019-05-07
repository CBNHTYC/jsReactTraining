import React from "react";
import './css/FilterPanel.css';

const FilterPanel = (props) => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <form onSubmit={props.onSubmit}>
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
                                                   defaultValue={props.priceBeg}
                                                   onChange={props.onChInpPriceBeg}
                                                   onSubmit={props.onChInpPriceBeg}
                                                   onBlur={props.onChInpPriceBeg}/>
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
                                                   defaultValue={props.priceEnd}
                                                   onChange={props.onChInpPriceEnd}
                                                   onSubmit={props.onChInpPriceEnd}
                                                   onBlur={props.onChInpPriceEnd}/>
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
                                           checked={props.foreingState.isVenAcer}
                                           onChange={props.togChVenAcer} id="checkVenAcer"/>
                                    <label className="form-check-label" htmlFor="checkVenAcer">
                                        Acer
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" value=""
                                           checked={props.foreingState.isVenFly}
                                           onChange={props.togChVenFly} id="checkVenFly"/>
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
                                           checked={props.foreingState.isTypePhone}
                                           onChange={props.togChTypePhone} id="checkTypePhone"/>
                                    <label className="form-check-label" htmlFor="checkTypePhone">
                                        Телефон
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" value=""
                                           checked={props.foreingState.isTypeSmart}
                                           onChange={props.togChTypeSmart} id="checkTypeSmart"/>
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
                                           checked={props.foreingState.isRam05}
                                           onChange={props.togChRam05} id="checkRam05"/>
                                    <label className="form-check-label" htmlFor="checkRam05">
                                        0.5
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" value=""
                                           checked={props.foreingState.isRam1}
                                           onChange={props.togChRam1} id="checkRam1"/>
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
                                                   defaultValue={props.accumBeg}
                                                   onChange={props.onChInpAccBeg}
                                                   onSubmit={props.onChInpAccBeg}
                                                   onBlur={props.onChInpAccBeg}/>
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
                                                   onChange={props.onChInpAccEnd}
                                                   onSubmit={props.onChInpAccEnd}
                                                   onBlur={props.onChInpAccEnd}/>
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
                                           checked={props.foreingState.isSim1}
                                           onChange={props.togChSim1} id="checkSim1"/>
                                    <label className="form-check-label" htmlFor="checkSim1">
                                        1
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" value=""
                                           checked={props.foreingState.isSim2}
                                           onChange={props.togChSim2} id="checkSim2"/>
                                    <label className="form-check-label" htmlFor="checkSim2">
                                        2
                                    </label>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="form-group" onClick={props.onSubmit}>
                        <button className="btn btn-dark">
                            Принять
                        </button>
                        <button className="btn btn-outline-dark right" onClick={props.onClear}>
                            Сброс
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FilterPanel;
