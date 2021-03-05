import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Auth from "layouts/Auth.js";
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import AdminLayout from "layouts/Admin/Admin.js";

ReactDOM.render(
  <ThemeContextWrapper>
  <BackgroundColorWrapper>
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      
      <Route path="/auth" component={Auth} />
      <Route path="/home" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Redirect from="/" to="/home" />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
  </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
