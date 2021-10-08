import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

import wave from './assets/Purple_Waves.svg'

import Socials from "../components/Social/Socials";
import Footer from "./Footer/Footer";

const Layout = ({ children, showNav, showIntro, siteTitle, siteSubtitle }) => (
  <>
    <Header siteTitle={siteTitle} siteSubtitle={siteSubtitle} showNav={showNav} showIntro={showIntro} />
    {/* <img src={'./assets'} /> */}

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
