import React from "react";
import { Route, Switch } from "react-router-dom";
import { Cart } from "../Components/Cart";
import { Items } from "../Components/Items";

interface Props {
  productItems: any;
  cartItems: any;
  handleChange: any;
  handleDelete: any;
  searchItem: any;
  jupitorInfo: any;
}
export const Routes: React.FC<Props> = ({
  productItems,
  cartItems,
  handleChange,
  handleDelete,
  searchItem,
  jupitorInfo,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Items
            productItems={productItems}
            handleChange={handleChange}
            searchItem={searchItem}
            jupitorInfo={jupitorInfo}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleChange={handleChange}
            handleDelete={handleDelete}
            jupitorInfo={jupitorInfo}
          />
        </Route>
      </Switch>
    </div>
  );
};
