import React from 'react'
import CommonButton from '..'
import { render, screen } from '@testing-library/react'

describe("CommonButton",()=>{
    test('should render component properly without props', () => { 
        render(<CommonButton  />)
        expect(screen.getByTestId("CommonButton-component")).toBeInTheDocument()
     })
})