
const initialState = {
    selected_product: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state, selected_product: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;
