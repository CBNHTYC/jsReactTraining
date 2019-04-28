import React from "react";

class Detail extends React.Component {
    render() {
        return (
            <div>
                {this.props.id &&
                <div>
                    <p>ID: {this.props.id}</p>
                    <p>Name: {this.props.name}</p>
                </div>
                }
                <p>Error: {this.props.error}</p>
            </div>
        );
    }
}

export default Detail;