import React from "react";

class LeftPanel extends React.Component {
    render() {
        return (
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                    Разворачиваемая панель #1
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordionExample">
                            <div className="parameter-list scrollable">
                                <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Default
                                    </label>
                                </li>
                                <li className="list-group-item disabled">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                    Разворачиваемая панель #2
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                Some text2
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    Разворачиваемая панель #3
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                some text3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftPanel;