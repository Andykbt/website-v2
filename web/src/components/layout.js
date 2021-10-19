import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

import wave from './assets/Purple_Waves_2.svg'

import Socials from "../components/Social/Socials";
import Footer from "./Footer/Footer";

const Layout = ({ children, showIntro, siteTitle, siteSubtitle, headerItems }) => (
  <>
    <Header siteTitle={siteTitle} siteSubtitle={siteSubtitle} showIntro={showIntro} headerItems={headerItems} />
    <Socials />

    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <img src={wave} />
      <div className={styles.footerWrapper}>
        <Footer/>
      </div>
    </footer>
  </>
);

Layout.defaultProps = {
  showIntro: false,
}

export default Layout;
