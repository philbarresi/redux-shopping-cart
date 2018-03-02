import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions";
import ProductRow from "./ProductRow";

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.productListing.map(x => (
          <ProductRow
            addToCart={this.props.addToCart}
            product={x}
            key={x.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productListing: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, quantity) => {
      dispatch(addProductToCart(id, quantity));
    }
  };
};

ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductList;
