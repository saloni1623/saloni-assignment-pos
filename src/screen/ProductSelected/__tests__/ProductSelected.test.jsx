import React from 'react'
import ProductSelected from '..'
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
        {
            id:1,
            quantity:1
        }
    ]
}

const storeWithMockState = mockStore(mockState);



describe("ProductSelected",()=>{
   
    beforeEach(() => {
        useSelector.mockImplementation((callback) => {
          return callback(mockState);
        });
      });
      afterEach(() => {
        useSelector.mockClear();
      });
    test('should render component properly', () => { 
        render(<Provider store={storeWithMockState} ><ProductSelected  /></Provider>
        )
        expect(screen.getByTestId("ProductSelected-component")).toBeInTheDocument()
     })

     test('should clear items common button cancel sale is clicked',async () => { 
        useDispatch.mockReturnValue(jest.fn())
     
        render(<Provider store={storeWithMockState} ><ProductSelected  /></Provider>
        )
        expect(screen.getByTestId("ProductSelected-component")).toBeInTheDocument()
        const btn = screen.getByText("cancel sale")
        expect(btn).toBeInTheDocument()
        fireEvent.click(btn)
        expect(addProduct).toBeCalledWith([])
     })

     test('should open modal when Common button process sale is clicked',async () => { 
        render(<Provider store={storeWithMockState} ><ProductSelected  /></Provider>
        )
        expect(screen.getByTestId("ProductSelected-component")).toBeInTheDocument()
        const btn = screen.getByText("process sale")
        expect(btn).toBeInTheDocument()
        fireEvent.click(btn)
        const modal=await screen.findByTestId("ModalComponent")
        expect(modal).toHaveStyle("display:block")
     })
     
     test('should close modal when close is clicked',async () => { 
        render(<Provider store={storeWithMockState} ><ProductSelected  /></Provider>
        )
        expect(screen.getByTestId("ProductSelected-component")).toBeInTheDocument()
        const btn = screen.getAllByTestId("CommonButton-component")
        expect(btn[1]).toBeInTheDocument()
        await fireEvent.click(btn[1])
        const modal=await screen.findByTestId("ModalComponent")
        expect(modal).toHaveStyle("display:block")
        fireEvent.click(screen.getByText('Close'))
        expect(modal).toHaveStyle("display:none")
     })

     test('should render no product component when selected have no length and should not open modal',async () => { 
       const mockState2={
        selected_product:[]
       }

        useSelector.mockImplementation((callback) => {
            return callback(mockState2);
          });
        render(<Provider store={storeWithMockState} ><ProductSelected  /></Provider>)
        expect(screen.getByTestId("ProductSelected-component")).toBeInTheDocument()
        expect(screen.getByText(/THERE ARE NO PRODUCTS/i)).toBeInTheDocument()
        const btn = screen.getAllByTestId("CommonButton-component")
        expect(btn[1]).toBeInTheDocument()
        await fireEvent.click(btn[1])
        const modal=await screen.findByTestId("ModalComponent")
        expect(modal).toHaveStyle("display:none")
     })
})