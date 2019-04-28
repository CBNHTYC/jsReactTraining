import React from "react";

class CardPanel extends React.Component {
    render() {
        return (
            <div>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={require('../../img/fruit.jpg')} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Грейпфрутова карточка</h5>
                                <p className="card-text">Отче наш, Иже еси на небесех!
                                    Да святится имя Твое,
                                    да приидет Царствие Твое,
                                    да будет воля Твоя,
                                    яко на небеси и на земли.
                                    Хлеб наш насущный даждь нам днесь;
                                    и остави нам долги наша,
                                    якоже и мы оставляем должником нашим;
                                    и не введи нас во искушение,
                                    но избави нас от лукаваго.
                                    Ибо Твое есть Царство и сила и слава во веки.
                                    Аминь.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardPanel;