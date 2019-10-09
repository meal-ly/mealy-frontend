import * as React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ILayoutProps } from "./types";
import "./styles.scss";

const Layout = ({ children }: ILayoutProps) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
