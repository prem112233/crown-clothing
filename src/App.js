import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
// import {MenuItem} from './components/menu.item/menu.item.component'
import Header from "./components/header/header.component";
import "./App.css";
import Signin from "./pages/signin-up/signin-up.component";
import SignI from "./components/sign-in/sign-in.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </div>
  );
};
export default App;
