import React from 'react'
import NoProductCard from '../noProductCard'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from "redux-mock-store";


const mockStore = configureStore();

const mockState={}

const storeWithMockState = mockStore(mockState);



describe("noProductCard",()=>{
    test('should render component properly', () => { 
        render(<Provider store={storeWithMockState} ><NoProductCard  /></Provider>
        )
        expect(screen.getByTestId("noProductCard-component")).toBeInTheDocument()
     })
})