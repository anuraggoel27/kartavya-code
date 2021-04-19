import React from "react";
import CustomNavbar from "./CustomNavbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function TestContent() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default TestContent;
