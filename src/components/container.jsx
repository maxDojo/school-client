import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Body from "./body";
import Footer from "./footer";
import styles from "./css/container.module.css";

const Container = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col md-3 m-0">
          <Sidebar />
        </div>
        <div className={`{styles.main_content} col-lg-10 col-md-9 m-0`}>
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
