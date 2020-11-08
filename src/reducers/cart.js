import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];

var findIndexOf = (state, id) => {
    var location = -1;
    state.forEach((item, index) => {
        if(item.product.id === id){
            location = index;
            return location;
        }
    })
    return location;
}

const products = (state = initialState, action) => {
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART : 
            index = findIndexOf(state, action.product.id);
            if(index !== -1){
                state[index].quantity += 1;
            }else{
                state.push({
                    product: action.product,
                    quantity: action.quantity,
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_CART_PRODUCT:
            index = findIndexOf(state, action.product.product.id);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return[...state];
        case types.REDUCE_PRODUCT:
            index = findIndexOf(state, action.product.product.id);
            if(index !== -1 && state[index].quantity > 1){
                state[index].quantity -= 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.INCREASE_PRODUCT:
            index = findIndexOf(state, action.product.product.id);
            if(index !== -1){
                state[index].quantity++;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: 
            return [...state];
    }
}

export default products;