import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            detail: {},
            apiError: false
        }
    }

    apiCall() {
        console.log("<Detail/> componentDidMount()");
        // let url = "http://localhost:3001/api/weather?address=galway";
        let url = `http://localhost:3001/api/weather?address=${this.state.address}`;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);

                    if (result.error) {
                        this.setState({
                            detail: result,
                            address: this.props.address,
                            apiError: true
                        });
                    }
                    else {
                        this.setState({
                            detail: result,
                            address: this.props.address,
                            apiError: false
                        });
                    }

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("error!")
                    console.log(error);
                    this.setState({
                        detail: {},
                        address: this.props.address,
                        apiError: true
                    });
                }
            )
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.address !== prevState.address) {
            this.apiCall();
        }
    }

    componentDidMount() {
        this.apiCall();
    }

    render() {

        if (this.state.apiError === true) {
            return (
                <div>
                    <p>{this.state.detail.error}</p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div>{this.state.detail.name}</div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div>Forecast : {this.state.detail.forecast}</div>
                        </div>
                        <div className="col-md-6">
                            <div>Temperature : {this.state.detail.temperature}</div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div>Pressure : {this.state.detail.pressure}</div>
                        </div>
                        <div className="col-md-6">
                            <div>Humidity : {this.state.detail.humidity}</div>
                        </div>
                    </div>
                </div>
            );

        }

    }
}


export { Detail };
