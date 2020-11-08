import React, { Component } from "react";
//import ProductsContainer from './../containers/ProductsContainer';
var randomstring = require("randomstring");

class Product extends Component {
    showRating(number){
        var result = [];
        for(var rating = 0; rating < number; rating++){
            result.push(<i className="fa fa-star" key={randomstring.generate(7)}></i>);
        }
        for(var unrating = 0; unrating < (5-number); unrating++){
            result.push(<i className="fa fa-star-o" key={randomstring.generate(7)}></i>);
        }
        return result;
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onMessageNotice();
    }

    render() {
        var {product} = this.props;
        return (    
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt={product.name} />
                        <a href="/#" >
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/#" >{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li key={product.price}>
                                { this.showRating(product.rating) }
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    data-original-title="Add to Cart" 
                                    href="/#" 
                                    onClick={() => this.onAddToCart(product)}
                                    >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
