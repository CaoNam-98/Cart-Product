import * as types from './../constants/ActionTypes';

export const onAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
    }
}

export const onMessageNotice = (MessageNotice) => {
    return{
        type: MessageNotice,
    } 
}

export const onDeleteCartProduct = (product) => {
    return {
        type: types.DELETE_CART_PRODUCT,
        product,
    }
}

export const onReduceProduct = (product) => {
    return {
        type: types.REDUCE_PRODUCT,
        product,
    }
}

export const onIncreaseProduct = (product) => {
    return {
        type: types.INCREASE_PRODUCT,
        product,
    }
}

export const onMessageNoticeChangeProduct = (MessageNotice) => {
    return {
        type: MessageNotice,
    }
}
