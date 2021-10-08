import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Icon from "./assets";
import { cn } from "../lib/helpers";
import { useSpringRef, useTransition, animated, useChain } from 'react-spring'

import * as styles from "./header.module.css";
import { RiArrowDownSLine } from 'react-icons/ri'

import wave from './assets/Purple_Waves_2.svg'
import logo from './assets/logo.png'

function Header({ showNav, siteTitle, siteSubtitle, showIntro }) {
  const links = [
    {
      title: "Home",
      link: '/',
    },
    {
      title: "Archive",
      link: '/archive/',
    },
    {
      title: "Projects",
      link: '#Projects',
    },
  ];

  const items = [
    ({ style }) => <animated.h1 style={{ ...style, position: 'relative', fontSize: 75, marginBottom: 0}}>{siteTitle}</animated.h1>,
    ({ style }) => <animated.p style={{ ...style, position: 'relative', }}>{siteSubtitle}</animated.p>,
    ({ style }) => <animated.img src={logo} style={{ ...style, position: 'relative', width: 250, height: 250, borderRadius: '50%', backgroundColor: 'cyan'}}></animated.img>
  ]

  const transitionRef = useSpringRef()
  const transitionRef1 = useSpringRef()

  const transitions = useTransition(links, {
    ref: transitionRef,
    trail: 150,
    from: { top: -100 },
    enter: { top: 0 },
  })

  const transitions2 = useTransition(items, {
    ref: transitionRef1,
    trail: 150,
    from:   { bottom: -100, opacity: 0 },
    enter:  { bottom: 0, opacity: 1 },
  })

  useChain([transitionRef, transitionRef1], [0, 1.35])

  return (
    <div className={styles.root}>
      {showIntro && <img src={wave} style={{transform: 'rotate(180deg)'}}></img>}
      <div className={styles.wrapper}>
        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li style={{display: 'flex', color: 'white'}}>
              {transitions((style, item) => (
                <animated.a className={styles.navItem} href={item.link} style={{...style, marginRight: 15, marginLeft: 15}}>{item.title}</animated.a>
                ))}
            </li>
          </ul>
        </nav>
      </div>

      {showIntro &&
        <div className={styles.content}>
          {transitions2((style, item) => {
            const Item = item
            return <Item style={style} />
          })}
        </div>
      }

      <a className={styles.arrowDown} onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth'
        });}}>
        <RiArrowDownSLine size={'5em'}/>
      </a>
    </div>
  );
}

export default Header