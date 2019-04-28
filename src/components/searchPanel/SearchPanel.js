import React from "react";
import './SearchPanel.css';
import LeftPanel from './LeftPanel'
import CardPanel from './CardPanel'

class SearchPanel extends React.Component {
    render() {
        return (
            <div className="container-fluid main">
                <div className="row main-row">
                    <div className="col-md-2">
                        <LeftPanel/>
                    </div>
                    <div className="col-md-8">
                        <CardPanel/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPanel;