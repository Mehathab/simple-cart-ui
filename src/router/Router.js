import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Products from "../components/Products";
import { Jumbotron, Col, Row } from "reactstrap";
import LandingPage from "../components/LandingPage";

const Router = () => {
  const smCenteredView = { size: 12, offset: 0 };
  const mdCenteredView = { size: 8, offset: 2 };
  const lgCenteredView = { size: 8, offset: 2 };
  const layoutProps = {
    lg: lgCenteredView,
    md: mdCenteredView,
    sm: smCenteredView,
  };
  return (
    <HashRouter basename=''>
      <Row>
        <Col {...layoutProps}>
          <h1>{"<Cart />"}</h1>
        </Col>
      </Row>
      <Col {...layoutProps}>
        <Switch class>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
        </Switch>
      </Col>
    </HashRouter>
  );
};

export default Router;
