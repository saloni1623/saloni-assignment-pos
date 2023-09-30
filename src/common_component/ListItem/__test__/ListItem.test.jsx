import React from 'react'
import ListItem from '..'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import configureStore from "redux-mock-store"
import { addProduct } from '../../../assets/redux/actions'

jest.mock("../../../assets/redux/actions",()=>({
    ...jest.requireActual("../../../assets/redux/actions"),
    addProduct:jest.fn()
}))



jest.mock("react-redux",()=>({
    ...jest.requireActual("react-redux"),
    useDispatch:jest.fn(),
    useSelector:jest.fn(),
}))


const mockStore = configureStore();


const mockState={
    selected_product:[
        {
            id:1,
            quantity:2
        }
    ]
}

const storeWithMockState = mockStore(mockState);

const props ={
    elem:{image:'tesImage.png', 
    name:'Test', 
    price:1, 
    description:'Test Dis', 
    quantity:2,
    id:1
} 
}

describe("ListItem",()=>{
    beforeEach(() => {
        useSelector.mockImplementation((callback) => {
          return callback(mockState);
        });
      });
      afterEach(() => {
        useSelector.mockClear();
      });
    test('should render component properly', () => { 
        render(<Provider store={storeWithMockState} ><ListItem  {...props} /></Provider>
        )
        expect(screen.getByTestId("ListItem-component")).toBeInTheDocument()
     })

     test('should increase the quantity of the item', () => { 
        useDispatch.mockReturnValue(jest.fn())
        
        render(<Provider store={storeWithMockState} ><ListItem  {...props} /></Provider>
        )
        expect(screen.getByTestId("ListItem-component")).toBeInTheDocument()
        const plus = screen.getByTestId("ListItem-plusBtn")
        fireEvent.click(plus)
        expect(addProduct).toBeCalledWith([{id: 1, quantity: 3}])
     })

     test('should increase the quantity of the item((id !==selectedId))', () => { 
        useDispatch.mockReturnValue(jest.fn())
        useSelector.mockImplementation((callback) => {
            return callback({selected_product:[{
                    id:2,
                    quantity:1
            }]});
          });
        render(<Provider store={storeWithMockState} ><ListItem  {...props} /></Provider>
        )
        expect(screen.getByTestId("ListItem-component")).toBeInTheDocument()
        const plus = screen.getByTestId("ListItem-plusBtn")
        fireEvent.click(plus)
        expect(addProduct).toBeCalledWith( [{quantity: NaN}, {id: 2, quantity: 1}])
     })

     test('should decrease the quantity of the item', () => { 
        useDispatch.mockReturnValue(jest.fn())
        render(<Provider store={storeWithMockState} ><ListItem  {...props} /></Provider>
        )
        expect(screen.getByTestId("ListItem-component")).toBeInTheDocument()
        const minus = screen.getByTestId("ListItem-minusBtn")
        fireEvent.click(minus)
        expect(addProduct).toBeCalledWith([{id: 1, quantity: 1}])
     })

     test('should call addProduct with [] when delete btn is clicked', () => { 
        useDispatch.mockReturnValue(jest.fn())
        render(<Provider store={storeWithMockState} ><ListItem  {...props} /></Provider>
        )
        expect(screen.getByTestId("ListItem-component")).toBeInTheDocument()
        const plus = screen.getByTestId("ListItem-cross")
        fireEvent.click(plus)
        expect(addProduct).toBeCalledWith([])
     })

     test('should decrease the quantity of the item(id !==selectedId)', () => { 
        useDispatch.mockReturnValue(jest.fn())
        useSelector.mockImplementation((callback) => {
            return callback({selected_product:[{
                    id:2,
                    quantity:2
            }]});
          });
          render(<Provider store={storeWithMockState} ><ListItem  {...props} /></Provider>
          )
          expect(screen.getByTestId("ListItem-component")).toBeInTheDocument()
          const minus = screen.getByTestId("ListItem-minusBtn")
          fireEvent.click(minus)
          expect(addProduct).toBeCalledWith([{quantity: NaN}, {id: 2, quantity: 2}])
     })

     test('should decrease the quantity of the item(prevQuantity === 1)', () => { 
        useDispatch.mockReturnValue(jest.fn())
        useSelector.mockImplementation((callback) => {
            return callback({selected_product:[{
                    id:1,
                    quantity:1
            }]});
          });
          render(<Provider store={storeWithMockState} ><ListItem  {...props} /></Provider>
          )
          expect(screen.getByTestId("ListItem-component")).toBeInTheDocument()
          const minus = screen.getByTestId("ListItem-minusBtn")
          fireEvent.click(minus)
          expect(addProduct).toBeCalledWith([])
     })
})