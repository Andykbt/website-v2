import { Link } from "gatsby";
import React from "react";
import Icon from "./assets";
import { cn } from "../lib/helpers";
import wave from './assets/layered-waves-haikei.svg'

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, siteSubtitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>

      </div>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
            <Link to="#Projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className={styles.content}>
      <h1 style={{fontSize: 75, marginBottom: 0}}>{siteTitle}</h1>
      <p>{siteSubtitle}</p>
      <div style={{width: 250, height: 250, borderRadius: '50%', backgroundColor: 'cyan'}}/>
    </div>
  </div>
);

export default Header;
