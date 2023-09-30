import  Reducer from "../reducer";


const initialState = {
    selected_product: ""
};

describe("Redux Reducer",()=>{
    test('should return updated state when type is ADD_PRODUCT',()=>{
        const action = {
            type:"ADD_PRODUCT",
            payload:'test'
        }   
        expect(Reducer(initialState,action)).toEqual({selected_product: "test"})
    })

    test('should return the state when the type is not present in the reducer',()=>{
        const action = {
            type:"TEST",
        }   
        expect(Reducer(initialState,action)).toEqual({selected_product: ""})
    })
})