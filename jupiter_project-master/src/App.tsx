import React, { useState } from "react";
import { products } from "./Product/products";
import "./Style/Cart.css";
import "./Style/Header.css";
import "./Style/item.css";
import { Header } from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes/Routes";
import { connect } from "react-redux";
import product from "./product.json";

function App(_props: any) {
  const { jupiterData, jupitorInfo } = _props;
  const { productItems } = products;
  const [cartItems, setCardItems] = useState<any[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  console.log("jupitor", jupitorInfo);

  jupiterData(product);

  const handleChange = (product: {
    id: any;
    productId: any;
    value: any;
    name: any;
  }) => {
    const productExist = cartItems.find(
      (item) => item.productId === product.productId
    );
    console.log("bbbbbb", productExist);
    if (productExist) {
      setCardItems(
        cartItems.map((item) =>
          item.productId === product.productId
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCardItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleDelete = (product: { productId: any }) => {
    const productExist = cartItems.find(
      (item) => item.productId === product.productId
    );
    if (productExist.quantity === 1) {
      setCardItems(
        cartItems.filter((item) => item.productId !== product.productId)
      );
    } else {
      setCardItems(
        cartItems.map((item) =>
          item.productId
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchItem(e.target.value);
  };
  console.log(searchItem);
  return (
    <div className="App">
      <div>
        <Router>
          <Header
            cartItems={cartItems}
            handleSearch={handleSearch}
            searchItem={searchItem}
          />
          <Routes
            productItems={productItems}
            cartItems={cartItems}
            handleChange={handleChange}
            handleDelete={handleDelete}
            searchItem={searchItem}
            jupitorInfo={jupitorInfo}
          />
        </Router>
      </div>
    </div>
  );
}
const mapStateToProps = (state: { jupiterData: any }) => {
  return {
    jupitorInfo: state?.jupiterData,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  return {
    jupiterData: (val: any) => {
      dispatch({ type: "TOTAL_DATA", payload: val });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
