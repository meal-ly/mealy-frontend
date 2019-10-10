import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "../Header";
import Footer from "../Footer";
import { ILayoutProps } from "./types";
import "./styles.scss";

const Layout = ({ children, location }: ILayoutProps) => (
  <div className="app">
    <div className="content">
      <Header />
      <TransitionGroup exit={false}>
        <CSSTransition key={location.pathname.split("/")[1]} timeout={250} classNames="fade">
          {children}
        </CSSTransition>
      </TransitionGroup>
    </div>
    <Footer />
  </div>
);

export default Layout;
