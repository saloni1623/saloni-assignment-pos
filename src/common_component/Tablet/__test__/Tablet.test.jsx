import React from 'react'
import Tablet from '..'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from "redux-mock-store";


const mockStore = configureStore();

const mockState={}

const storeWithMockState = mockStore(mockState);

const props={
    item:{
        description:'Test Dis',
        price:1,
        name:"Test",
        image:'test.png'
    },
}

describe("Tablet",()=>{
    test('should render component properly', () => { 
        render(<Provider store={storeWithMockState} ><Tablet {...props} /></Provider>
        )
        expect(screen.getByTestId("Tablet-component")).toBeInTheDocument()
     })

     test('should handleFunc from props when component is clicked', () => { 
        const props2={
            item:{
                description:'Test Dis',
                price:1,
                name:"Test",
                image:'test.png'
            },
            handleFunc:jest.fn()
        }
        render(<Provider store={storeWithMockState} ><Tablet {...props2} /></Provider>
        )
        const comp = screen.getByTestId("Tablet-component")
        expect(comp).toBeInTheDocument()
        fireEvent.click(comp)
        expect(props2.handleFunc).toBeCalled()
     })


     test('should render Price when hovered',async () => { 
        render(<Provider store={storeWithMockState} ><Tablet {...props} /></Provider>
        )
        const tablet = screen.getByTestId("Tablet-component")
        expect(tablet).toBeInTheDocument()
        await fireEvent.mouseEnter(tablet)
        const price = await screen.findByText(/Price: ₹/i)
        const desc =await screen.findByText(/Desc: /i)
        expect(price).toBeInTheDocument()
        expect(desc).toBeInTheDocument()
        await fireEvent.mouseLeave(tablet)
        expect(price).not.toBeInTheDocument()
        expect(desc).not.toBeInTheDocument()
     })
})