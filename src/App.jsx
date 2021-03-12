import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Container from './components/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default App;
