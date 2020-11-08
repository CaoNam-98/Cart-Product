import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; //Kiểm tra kiểu dữ liệu của props
import CartProduct from './../components/CartProduct';
import Cart from './../components/Cart';
import CartResult from './../components/CartResult';
import * as MSG from './../constants/Message';
import {onDeleteCartProduct, onIncreaseProduct} from './../actions/index';
import {onMessageNotice, onReduceProduct, onMessageNoticeChangeProduct } from './../actions/index';

class CartContainer extends Component {
    showCartProduct(cart){
        var {onDeleteCartProduct, onMessageNotice, onReduceProduct, onIncreaseProduct, onMessageNoticeChangeProduct } = this.props;
        var result = <tr><td>{MSG.MSG_CART_EMPTY}</td></tr>;
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return <CartProduct key={index} 
                        item={item} 
                        onDeleteCartProduct={onDeleteCartProduct} 
                        onMessageNotice={onMessageNotice} 
                        onReduceProduct={onReduceProduct}
                        onIncreaseProduct={onIncreaseProduct}
                        onMessageNoticeChangeProduct={onMessageNoticeChangeProduct}
                        />
            })
        }
        return result;
    }

    showTotalAmount(cart){
        var totalAmount = 0;
        if(cart.length > 0){
            totalAmount = cart.reduce((totalAmount,a) => {
                return totalAmount + a.product.price*a.quantity;
            },totalAmount)
        }
        return <CartResult total={totalAmount} />
    }

    render() {
        var {cart} = this.props;
        return (
                <Cart>
                    { this.showCartProduct(cart) }
                    { this.showTotalAmount(cart) }
                </Cart>
            );
        }
    }

//Kiểm tra kiểu dữ liệu của prop ở đây
CartContainer.propTypes = {
    cart : PropTypes.arrayOf( // arrayOf nghĩa là products phải là 1 mảng
        PropTypes.shape({
            product : PropTypes.shape({
                id : PropTypes.number.isRequired, 
                name : PropTypes.string.isRequired,
                image : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired
            }).isRequired,
            quantity : PropTypes.number.isRequired, 
        })
    ).isRequired, //Products không được phép rỗng
    onDeleteCartProduct : PropTypes.func.isRequired,
    onMessageNotice : PropTypes.func.isRequired,
    onReduceProduct : PropTypes.func.isRequired,
    onIncreaseProduct : PropTypes.func.isRequired,
    onMessageNoticeChangeProduct : PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteCartProduct : (product) => {
            dispatch(onDeleteCartProduct(product));
        },
        onMessageNotice : () => {
            dispatch(onMessageNotice(MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS));
        },
        onReduceProduct : (product) => {
            dispatch(onReduceProduct(product));
        },
        onIncreaseProduct : (product) => {
            dispatch(onIncreaseProduct(product));
        },
        onMessageNoticeChangeProduct : () => {
            dispatch(onMessageNoticeChangeProduct(MSG.MSG_UPDATE_CART_SUCCESS));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
