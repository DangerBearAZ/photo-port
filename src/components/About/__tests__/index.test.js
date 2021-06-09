//react to enable the components to function properly so we can test them.
import React from 'react';

//Render -jest creates a simulated DOM in a Node.js environment to approximate the DOM
// Clean up to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react'

//jest-dom offers access to custom matchers that are used to test DOM
import '@testing-library/jest-dom/extend-expect'; 

// import the component we will be testing,
import About from '..';

//this will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup)

//describe function to declare the component we're testing,
describe('About component', () => {
    //first test * test can also be used interchangeably with it
    // does it render 
    it('renders', () => {
        render(<About />);
    });
    //second test 
    //test case", we'll compare snapshot versions of the DOM node structure. A snapshot is a serialized version of the DOM node structure, enabled by Jest.
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        //test and compare whether the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
})