import React from "react";

const BASE_URI = "http://localhost:8080/fc/rest";
const PHONES = "phones";
let detailDtoList = undefined;

class LeftPanel extends React.Component {

    state = {
        detailNameComponent: undefined
    };

    componentDidMount() {
        this.getDetails();
    }

    getDetails = async (event) => {
        // event.preventDefault();
        // const type = event.target.elements.type.value;
        console.log("GBCZ");
        const apiUrl = await fetch(`${BASE_URI}/getDetails?category=${PHONES}`);
        const data = await apiUrl.json();
        console.log(data);
        detailDtoList = data.detailDtoList.map(item => item);
        this.setState({
            detailNameComponent: detailDtoList.map(detail => {
                return (
                    <DetailName
                        id={detail.detailId}
                        name={detail.name}
                        values={detail.elastDetailValueList}
                        key={detail.id}
                    />
                )
            })
        })
    };

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default LeftPanel;