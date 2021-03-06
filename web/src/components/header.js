import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Icon from "./assets";
import { cn } from "../lib/helpers";
import { useSpringRef, useTransition, animated, useChain } from 'react-spring'

import * as styles from "./header.module.css";
import { RiArrowDownSLine } from 'react-icons/ri'

import wave from './assets/Purple_Waves_2.svg'

function Header({ showNav, siteTitle, siteSubtitle, showIntro, headerItems }) {
  const links = [
    {
      title: "Home",
      link: '/',
    },
    {
      title: "Projects",
      link: '/projects/',
    },
  ];

  const transitionRef = useSpringRef()
  const transitionRef1 = useSpringRef()

  const transitions = useTransition(links, {
    ref: transitionRef,
    trail: 150,
    from: { top: -100 },
    enter: { top: 0 },
  })

  const transitions2 = useTransition(headerItems, {
    ref: transitionRef1,
    trail: 150,
    from:   { bottom: -100, opacity: 0 },
    enter:  { bottom: 0, opacity: 1 },
  })

  useChain([transitionRef, transitionRef1], [0, 0.75])

  return (
    <div className={cn(styles.root, styles.fullHeight)}>
      <img src={wave} style={{transform: 'rotate(180deg)'}}></img>

      <header>
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
      </header>

      {showIntro &&
        <>
          <div className={styles.content}>
            {transitions2((style, item) => {
              const Item = item
              return <Item style={style} />
            })}
          </div>
        
          <a className={styles.arrowDown} onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              left: 0,
              behavior: 'smooth'
            });}}>
            <RiArrowDownSLine size={'5em'}/>
          </a>
        </>
      }

    </div>
  );
}

export default Header