import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'


const portrait = { name: "portraits", description: "Portraits of people in my life" }

afterEach(cleanup)

//rendering test 
describe('Gallery is rendering', () => {

    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });
})

// snapshot test 
it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
})

//test to make sure that the title of our h1 is Portraits 
it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})