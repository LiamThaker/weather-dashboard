import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import { Detail } from '../components/Detail';

// A few tests for rendering components

describe('Simple Addition Test', () => {
    it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });
});

test('renders Navbar and Footer component', () => {
    render(<Footer />);
    render(<Navbar />);
});


test('renders Detail component', () => {
    render(<Detail address={"galway"} />);

});

test('renders Container component', () => {
    render(<Container />);

});


// test('expect fail render Container component', () => {
//     expect(() => {
//         render(<Container />);;
//     }).toThrowError();
// });