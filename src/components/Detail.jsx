import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }

    componentDidMount() {
        console.log("<Detail/> componentDidMount()");
        fetch("http://localhost:3001/api/weather?address=galway")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);

                    this.setState({
                        detail: result,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    this.setState({
                        detail: {},
                    });
                }
            )
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
