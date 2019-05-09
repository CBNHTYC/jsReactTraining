import React from 'react';
import Info from "./components/Info";
import Form from "./components/Form";
import Detail from "./components/Detail";
import DetailSimple from "./components/DetailSimple";
import Head from "./components/Head";
import MainPanel from "./components/searchPanel/MainPanel";


const BASE_URI = "http://localhost:8080/fc/rest";

class App extends React.Component {

    state = {
        id: undefined,
        name: undefined,
        error: undefined
    };

    getDetails = async (event) => {
        event.preventDefault();
        const type = event.target.elements.type.value;

        if (type) {
            const apiUrl = await fetch(`${BASE_URI}/getDetails?category=${type}`);
            const data = await apiUrl.json();
            console.log(data);

            const detailDtoList = data.detailDtoList.map(item => item);
            console.log(detailDtoList);
            const names = detailDtoList.map(item => item.name);
            console.log(names);

            this.setState({
                id: detailDtoList[0].detailId,
                name: detailDtoList[0].name,
                error: undefined
            });
        } else {
            this.setState({
                id: undefined,
                name: undefined,
                error: "Введите тип запрашиваемых характеристик"
            });
        }
    };

    render() {
        return (
            <div className="wrapper">
                <MainPanel />{/*<div className="main">*/}
                {/*<div className="container">*/}
                {/*<div className="row">*/}
                {/*<div className="col-sm-5 info">*/}
                {/*<Info/>*/}
                {/*</div>*/}
                {/*<div className="col-sm-7 form">*/}
                {/*<Form getDetails={this.getDetails}/>*/}
                {/*<DetailSimple*/}
                {/*id={this.state.id}*/}
                {/*name={this.state.name}*/}
                {/*error={this.state.error}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
