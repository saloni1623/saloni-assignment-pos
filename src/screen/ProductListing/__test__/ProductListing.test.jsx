import React from 'react'
import ProductListing from '..'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import configureStore from "redux-mock-store";
import { addProduct } from '../../../assets/redux/actions';

jest.mock("../../../assets/redux/actions",()=>({
    ...jest.requireActual("../../../assets/redux/actions"),
    addProduct:jest.fn()
}))


jest.mock("react-redux",()=>({
    ...jest.requireActual("react-redux"),
    useDispatch:jest.fn(),
    useSelector:jest.fn()
}))

const mockStore = configureStore();

const mockState={
    selected_product:[
    ]
}

const mockState2={
    selected_product:[
        {
            id:1,
            quantity:1
        }
    ]
}

const storeWithMockState = mockStore(mockState);

describe("ProductListing",()=>{
    beforeEach(() => {
        useSelector.mockImplementation((callback) => {
          return callback(mockState);
        });
      });
      afterEach(() => {
        useSelector.mockClear();
      });
    test('should render component properly', () => { 
        render(<Provider store={storeWithMockState} ><ProductListing  /></Provider>
        )
        expect(screen.getByTestId("ProductListing-component")).toBeInTheDocument()
     })

     test('should render Tablet component properly', () => { 
        render(<Provider store={storeWithMockState} ><ProductListing  /></Provider>
        )
        const tabletComp = screen.getAllByTestId("Tablet-component")
        expect(tabletComp.length).toBe(7)
     })

     test('should add the item to the list', () => { 
        useDispatch.mockReturnValue(jest.fn())
        render(<Provider store={storeWithMockState} ><ProductListing  /></Provider>)
        const tabletComp = screen.getAllByTestId("Tablet-component")
        expect(tabletComp.length).toBe(7)
        fireEvent.click(tabletComp[0])
        expect(addProduct).toBeCalledWith([{"category": "computers", "description": "PC, Laptop, palmtop,…", "id": 1, "image": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg", "name": "computer", "price": "130", "quantity": 1}])
    })

    test('should increase the no. of item if its in already added', () => { 
        useDispatch.mockReturnValue(jest.fn())
        useSelector.mockImplementation((callback) => {
            return callback(mockState2);
          });
        render(<Provider store={storeWithMockState} ><ProductListing  /></Provider>)
        const tabletComp = screen.getAllByTestId("Tablet-component")
        expect(tabletComp.length).toBe(7)
        fireEvent.click(tabletComp[0])
        expect(addProduct).toBeCalledWith([{id: 1, quantity: 2}])
    })
})