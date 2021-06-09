import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

//always use this
afterEach(cleanup);

// to run tests = npm run test

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
      });
    // snapshot test
    it('matches snapshot', () => {
      const { asFragment } = render (<Nav />);
      //assert valuecomparison
      expect(asFragment()).toMatchSnapshot();
    });
    })

    describe('emoji is visible', () => {
      it('inserts emoji into the h2', () => {
        //Arrange query to return element containing the emoji
        const { getByLabelText  } = render (<Nav />)
        //Assert or evaluation
        expect(getByLabelText('camera')).toHaveTextContent('📸');
      });
    })

      //verify that the text content is being inserted into the <a> tags (i.e., that the links are visible to users)
    describe('links are visible', () => {
      it('inserts text into the links', () => {
        //Arrange 
        const { getByTestId } = render(<Nav />);
        //Assert 
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
      });
    })