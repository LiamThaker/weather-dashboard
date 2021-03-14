import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            detail: {}
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

                    this.setState({
                        detail: result,
                        address: this.props.address,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    this.setState({
                        detail: {},
                        address: this.props.address,
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

        return (
            <div>
                <p> forecast : {this.state.detail.forecast}</p>
                <p> temperature : {this.state.detail.temperature}</p>
                <p> name : {this.state.detail.name}</p>
            </div>
        );
    }
}


export { Detail };
