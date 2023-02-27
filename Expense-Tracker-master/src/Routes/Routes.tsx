import React from "react";
import { Route, Switch } from "react-router-dom";
import { Balance } from "../Components/Balance";
import { Header } from "../Components/Header";
import { History } from "../Components/History";
import { Income } from "../Components/Income";
import { NewTransaction } from "../Components/NewTransaction";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/Balance">
         <Balance/>
        </Route>
        <Route path="/History" >
          <History/>
        </Route>
        <Route path="/Income">
          <Income/>
        </Route>
        <Route path="/NewTransation">
        <NewTransaction/> 
        </Route>
      </Switch>
    </div>
  );
};
