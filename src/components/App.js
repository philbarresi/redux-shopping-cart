import React, { Component } from "react";
import ProductList from "./ProductList";

import MainNavigation from "./MainNavigation";

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainNavigation />

        <header className="App-header">
          <h1 className="App-title">Welcome to the store</h1>
        </header>
        
        <main>
          <ProductList />
        </main>
      </div>
    );
  }
}

export default App;
