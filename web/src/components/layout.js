import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

import wave from './assets/footer-wave-haikei.svg'
import Socials from "../components/Social/Socials";
import Footer from "./Footer/Footer";

const Layout = ({ children, showNav, showIntro, siteTitle, siteSubtitle }) => (
  <>
    <Header siteTitle={siteTitle} siteSubtitle={siteSubtitle} showNav={showNav} showIntro={showIntro} />
    <Socials />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <img src={wave}/>
      <div className={styles.footerWrapper}>
        <Footer/>
      </div>
    </footer>
  </>
);

export default Layout;
