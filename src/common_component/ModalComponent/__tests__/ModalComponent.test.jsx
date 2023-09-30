import React from 'react'
import ModalComponent from '..'
import { render, screen } from '@testing-library/react'




describe("ModalComponent",()=>{
    test('should render component properly', () => { 
        render(<ModalComponent  />)
        expect(screen.getByTestId("ModalComponent")).toBeInTheDocument()
     })

     test('should have display block when isOpen is true', () => { 
        render(<ModalComponent isOpen={true} />)
        expect(screen.getByTestId("ModalComponent")).toHaveStyle("display:block")

     })
})