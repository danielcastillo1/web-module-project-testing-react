import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import { userEvent } from '@testing-library/user-event';

test('renders without errors with no props', async () => { 
    render(<Display/>)
});

test('renders Show component when the button is clicked ', () => {
    
    render(<Display/>);
    const button = screen.getByRole('button');
   // userEvent.clickButton();
 });

test('renders show season options matching your data when the button is clicked', () => { });
