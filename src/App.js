import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./components/Login";
import Ads from "./components/Ads/Ads";
import Home from "./components/Home";

import { loaduser } from "./actions/auth";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./components/layout/Footer";
import AddAds from "./components/Ads/AddAds";
import Alert from "./components/layout/Alert";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      store.dispatch(loaduser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/ads" component={Ads} />
          <Route exact path="/addads" component={AddAds} />
        </Switch>
        <Alert />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
