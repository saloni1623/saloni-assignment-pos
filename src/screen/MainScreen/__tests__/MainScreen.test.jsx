import React from 'react'
import MainScreen from '..'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from "redux-mock-store";

jest.mock("../../ProductListing",()=>()=>(
    <div>ProductListing</div>
))

jest.mock("../../ProductSelected",()=>()=>(
    <div>ProductListing</div>
))


const mockStore = configureStore();

const mockState={}

const storeWithMockState = mockStore(mockState);



describe("MainScreen",()=>{
    test('should render component properly', () => { 
        render(<Provider store={storeWithMockState} ><MainScreen  /></Provider>
        )
        expect(screen.getByTestId("MainScreen-component")).toBeInTheDocument()
     })
})