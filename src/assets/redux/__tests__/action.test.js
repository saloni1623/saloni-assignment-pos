import { addProduct } from "../actions";


describe("Redux Actions",()=>{
    test('addProduct: should return type=ADD_PRODUCT and payload to the reducer',()=>{
        const payload={
            id:'test'
        }

        expect(addProduct(payload)).toEqual({
            payload:{
                id: "test",
            },
            type: "ADD_PRODUCT",
        })
    })
})