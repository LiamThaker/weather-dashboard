import React from 'react';
import { Detail } from './Detail';

class Container extends React.Component {

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
                                                <div className="d-flex mb-2 ">
                                                    <input type="text" className="form-control" aria-label="Default" placeholder="City Name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-12">
                                        <div className="card-deck">
                                            <div className="card bg-light border-info">
                                                <div className="card-header bg-info text-white text-center">Card 1</div>
                                                <div className="card-body">
                                                    <Detail />
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
