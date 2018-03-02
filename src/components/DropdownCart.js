import React from "react";
import { Badge } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import { addProductToCart } from "../actions";

class DropdownCart extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { cart } = this.props;

    const numberOfItems = Object.values(cart).reduce((sum, curr) => {
      return sum + curr;
    }, 0);

    const totalPrice = Object.keys(cart)
      .reduce((sumCost, key) => {
        const costPerProduct = this.props.productDictionary[key].cost;
        return sumCost + cart[key] * costPerProduct;
      }, 0)
      .toFixed(2);

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="link">
          <Badge color="secondary">{numberOfItems}</Badge> My Cart
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Current Cost: ${totalPrice}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    productDictionary: state.products.reduce((dict, product) => {
      dict[product.id] = product;
      return dict;
    }, {}),
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (id, quantity) => {
      dispatch(addProductToCart(id, quantity));
    }
  };
};

DropdownCart = connect(mapStateToProps, mapDispatchToProps)(DropdownCart);

export default DropdownCart;
