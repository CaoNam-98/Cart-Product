import * as MSG from '../constants/Message';

var initialState = MSG.MSG_WELCOME;
const message = (state = initialState, action) => {
    switch(action.type){
        case MSG.MSG_ADD_TO_CART_SUCCESS:
            return MSG.MSG_ADD_TO_CART_SUCCESS;
        case MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS:
            return MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS;
        case MSG.MSG_UPDATE_CART_SUCCESS:
            return MSG.MSG_UPDATE_CART_SUCCESS;
        default:
            return state;
    }
}

export default message;