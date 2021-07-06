import { MemoryRouter } from 'react-router-dom';

import {render,screen} from '@testing-library/react';
import Header from './Header';
import SearchBar from './SearchBar';

describe('Header component test', () => {
    test('renders searchbar', () => {
        //Arrange
        render(
        <MemoryRouter >
            <Header/>
        </MemoryRouter >
            )
        //Act
    
    
        //Assert
        const search = screen.getByTestId('searchbar');
        expect(search).toBeInTheDocument();
    });
    test('renders infobar', () => {
        //Arrange
        render(
        <MemoryRouter >
            <Header/>
        </MemoryRouter >
            )
        //Act
    
    
        //Assert
        const infobar = screen.getByTestId('infobar');
        expect(infobar).toBeInTheDocument();
    });
    test('renders searchbar', () => {
        //Arrange
        render(
        <MemoryRouter >
            <Header/>
        </MemoryRouter >
            )
        //Act
    
    
        //Assert
        const shortcuts = screen.getByTestId('shortcuts');
        expect(shortcuts).toBeInTheDocument();
    });
})
