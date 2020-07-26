import { types } from "../types";

const initialState = {
    productos:[],
    error: null,
    loading: false
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {   
        default:
            return state;
    }
}