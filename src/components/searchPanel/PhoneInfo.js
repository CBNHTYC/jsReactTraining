import React from "react";
import './css/PhoneInfo.css';
import 'jquery';
import Card from "./Card";

class PhoneInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            imageList: undefined,
            detailList: undefined,
            accessoryLisList: undefined
        };
    };

    componentDidMount() {
        this.setImageList();
        this.setAccessList();
    }

    setImageList = () => {
        let imageList = this.props.imageList.slice(1);
        this.setState({
            imageList: imageList.map(image => {
                return (
                    <div className="carousel-item">
                        <img src={require(`../../img/jpg/${image.toString()}`)} className="d-block w-100" alt="..."/>
                    </div>
                )
            })
        });
    };

    setAccessList = () => {
        let accessList = this.props.accessoryList;

        this.setState({
            accessoryList: accessList.map(access => {
                return (
                        <Card
                            id={access.model.modelId}
                            vendor={access.model.vendor}
                            model={access.model.modelName}
                            description=""
                            price={access.model.price}
                            imgLocation={access.images.imageLocationList[0]}
                            getPhoneInfo={this.props.getAccessInfo}
                        />
                )
            })
        });
    };

    render() {
        return (
            <div className="container">
                <div className="card mb-3 main">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr className="justify-content-center">
                            <th scope="col">{this.props.vendor} {this.props.model}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"/>
                        </tr>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div id="carouselExampleFade" className="carousel slide carousel-fade"
                                     data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require(`../../img/jpg/${this.props.imageList[0].toString()}`)}
                                                 className="d-block w-100" alt="..."/>
                                        </div>
                                        {this.state.imageList}
                                        {console.log(this.props.imageList)}
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleFade" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body justify-content-center">
                                    <h5 className="card-title">Общее описание</h5>
                                    <div className="card mb-3 inner">
                                        <p className="card-text">{this.props.description}</p>
                                    </div>
                                    <p className="card-text">
                                        <h6 className="text-muted">{this.props.price}</h6>
                                    </p>
                                </div>
                            </div>
                        </div>
                        </tbody>
                    </table>
                </div>
                <div className="card details">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                        <a className="navbar-brand" href="#">Основные характеристики</a>
                    </nav>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th scope="row"/>
                            <td>Оперативная память</td>
                            <td/>
                            <td>{this.props.detailList.ram}</td>
                        </tr>
                        <tr>
                            <th scope="row"/>
                            <td>Ёмкость аккумулятора</td>
                            <td/>
                            <td>{this.props.detailList.accumulator}</td>
                        </tr>
                        <tr>
                            <th scope="row"/>
                            <td>Диагональ экрана</td>
                            <td/>
                            <td>{this.props.detailList.diagonal}</td>
                        </tr>
                        <tr>
                            <th scope="row"/>
                            <td>Поддержка двух сим-карт</td>
                            <td/>
                            <td>{this.props.detailList.sim}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                    <div className="card mb-3 access">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                            <a className="navbar-brand" href="#">Рекомендуемые позиции</a>
                        </nav>
                        <div className="row mx-auto my-auto justify-content-center">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade"
                                 data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                {this.state.accessoryList}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev accCorusPrev" href="#carouselExampleFade"
                                   role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next accCorusNext" href="#carouselExampleFade"
                                   role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default PhoneInfo;