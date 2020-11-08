import React, { Component } from "react";
import { connect } from 'react-redux';
import Products from './../components/Products.js';
import Product from './../components/Product';
import PropTypes from 'prop-types'; //Kiểm tra kiểu dữ liệu của props
import { onAddToCart, onMessageNotice } from './../actions/index';
import * as MSG from './../constants/Message';

class ProductsContainer extends Component {
    showProduct(products){
        var {onAddToCart, onMessageNotice} = this.props;
        var result = products.map((product, index) => {
            return <Product key={ index } product={ product } onAddToCart={ onAddToCart } onMessageNotice={onMessageNotice} />
        })
        return result;
    }

    render() {
        var {products} = this.props;
        return (
                <Products>
                    {this.showProduct(products)}
                </Products>
            );
        }
}

//Kiểm tra kiểu dữ liệu của prop ở đây
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf( // arrayOf nghĩa là products phải là 1 mảng
        PropTypes.shape({
            id : PropTypes.number.isRequired, 
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired, //Products không được phép rỗng
    onAddToCart : PropTypes.func.isRequired,
    onMessageNotice : PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        products : state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(onAddToCart(product, 1));
        },
        onMessageNotice : () => {
            dispatch(onMessageNotice(MSG.MSG_ADD_TO_CART_SUCCESS));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
