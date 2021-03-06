import React, { Component } from "react";

class CartProduct extends Component {
    onDeleteCartProduct = () => {
        this.props.onDeleteCartProduct(this.props.item);
        this.props.onMessageNotice();
    }

    onReduceProduct = () => {
        this.props.onReduceProduct(this.props.item);
        this.props.onMessageNoticeChangeProduct();
    }

    onIncreaseProduct = () => {
        this.props.onIncreaseProduct(this.props.item);
        this.props.onMessageNoticeChangeProduct();
    }

    render() {
        var {item} = this.props;
        return (
                <tr>
                    <th scope="row">
                        <img src={ item.product.image }
                            alt={item.product.name} className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{ item.product.name }</strong>
                        </h5>
                    </td>
                        <td>{item.product.price}</td>
                    <td className="center-on-small-only">
                        <span className="qty">{ item.quantity } </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={ this.onReduceProduct }>
                                <a href="/#">—</a>
                            </label>
                            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"onClick={ this.onIncreaseProduct }>
                                <a href="/#" >+</a>
                            </label>
                        </div>
                    </td>
                        <td>{item.product.price * item.quantity} $</td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item" onClick={this.onDeleteCartProduct}>
                            X
                        </button>
                    </td>
                </tr>   
            );
    }
}

export default CartProduct;
