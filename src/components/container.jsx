import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Body from "./body";
import Footer from "./footer";

const Container = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col md-3 m-0" height="1000px">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9 m-0">
          <header>
            <Header />
          </header>
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Container;
