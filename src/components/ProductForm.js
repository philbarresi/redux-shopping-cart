import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      description: "",
      cost: 5.99
    };
  }

  onChange = evt => {
    const name = evt.target.name;
    const value =
      name === "cost" ? parseFloat(evt.target.value, 2) : evt.target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);

    this.props.onAddProduct(
      this.state.productName,
      this.state.description,
      this.state.cost
    );

    this.setState({
      productName: "",
      description: "",
      cost: 5.99
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Add a new product</h2>
        <div className="form-row mb-1">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              name="productName"
              value={this.state.productName}
              onChange={this.onChange}
            />
          </div>

          <div className="col">
            <input
              type="test"
              className="form-control"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              name="cost"
              value={this.state.cost}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="form-row mb-4">
          <div className="col">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: (name, description, cost) => {
      dispatch(addProduct(name, description, cost));
    }
  };
};

ProductForm = connect(mapStateToProps, mapDispatchToProps)(ProductForm);

export default ProductForm;
