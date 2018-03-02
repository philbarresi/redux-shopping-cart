import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import MainNavigation from "./MainNavigation";

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainNavigation />

        <header className="jumbotron">
          <h1 className="App-title">Welcome to the store</h1>
        </header>

        <ProductForm />

        <main>
          <ProductList />
        </main>
      </div>
    );
  }
}

export default App;
