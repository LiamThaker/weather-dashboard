import React from 'react';
import { Detail } from './Detail';

class Container extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            address: "",
            search: ""
        };

        this.setAddressValue = this.setAddressValue.bind(this);
        this.setSearchValue = this.setSearchValue.bind(this);
    }

    setAddressValue(event) {
        console.log("setAddressValue(): " + this.state.search)

        // if (!this.state.search && this.state.search !== "") {
        this.setState({
            address: this.state.search
        });

        // }
        event.preventDefault();
    }

    setSearchValue(event) {
        let search = event.target.value
        console.log("setSearchValue(): " + event.target.value)
        this.setState({
            search: search
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-5">
                                        <div className="card bg-light border-info">
                                            <div className="card-body">
                                                <div className="col-md-12">
                                                    <form onSubmit={this.setAddressValue}>
                                                        <div className="form-row">
                                                            <div className="input-group mb-3">
                                                                <input className="form-control" type="text" value={this.state.search} onChange={this.setSearchValue} placeholder="City Name" />
                                                                <div className="input-group-append">
                                                                    <input className="btn btn-success" type="submit" value="Search" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-10">
                                        <div className="card-deck">
                                            <div className="card bg-light border-info">
                                                <div className="card-header bg-info text-white text-center">Weather</div>
                                                <div className="card-body">
                                                    <Detail address={this.state.address} />
                                                </div>
                                            </div>
                                            <div className="card bg-light border-info">
                                                <div className="card-header bg-info text-white text-center">Card 2</div>
                                                <div className="card-body">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-10">
                                        <div className="card bg-light border-info">
                                            <div className="card-header bg-info text-white text-center">Card 3</div>
                                            <div className="card-body">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}


export default Container;
