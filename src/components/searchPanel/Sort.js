import React from "react";

class Sort extends React.Component {

    constructor() {
        super();
        this.state = {
            sortButton: "Сортировка"
        };
    };

    setSortButtonContent = (type) => {
        this.setState({
            sortButton: type
        })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.sortButton}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <form onClick={(event) => { this.props.sort(this.props.priceUp, event); this.setSortButtonContent("Возрастание цены")}}>
                                <button className="dropdown-item" type="button">Возрастание цены</button>
                            </form>
                            <form onClick={(event) => { this.props.sort(this.props.priceDown, event); this.setSortButtonContent("Убывание цены")}}>
                                <button className="dropdown-item" type="button">Убывание цены</button>
                            </form>
                            <form onClick={(event) => { this.props.sort(this.props.nameUp, event); this.setSortButtonContent("Название А-Я")}}>
                                <button className="dropdown-item" type="button">Название А-Я</button>
                            </form>
                            <form onClick={(event) => { this.props.sort(this.props.nameDown, event); this.setSortButtonContent("Название Я-А")}}>
                                <button className="dropdown-item" type="button">Название Я-А</button>
                            </form>
                            <form onClick={(event) => { this.props.sort(this.props.viewsDown, event); this.setSortButtonContent("Популярность")}}>
                                <button className="dropdown-item" type="button">Популярность</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort;