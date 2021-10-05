import React, { useRef, useEffect, useState } from 'react'
import {
    useSpring,
    useTransition,
    animated,
} from '@react-spring/web'
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import * as classes from './Section.module.css'

export default function Section({node, showHeight, hideHeight, isAnimated}) {
    const [focus, setFocus] = useState(false)
    const [show, setShow] = useState(false)
    
    const ref = useRef()

    const expand = useSpring({
        maxHeight: show ? 470 : 130,
        boxShadow: focus
            ? "0 70px 70px 0 rgba(130, 136, 171, 1)"
            : "0 70px 140px 0 rgba(130,136,171,.2)",
    })

    const shadow = useSpring({
        boxShadow: focus
            ? "0 70px 70px 0 rgba(130, 136, 171, 1)"
            : "0 70px 140px 0 rgba(130,136,171,.2)",
    })



    const transitions = useTransition(show ? node.collection : [], {
        delay: 500,
        trail: 150,
        from:   { scale: 0, opacity: 0 },
        enter:  { scale: 1, opacity: 1 },
    })

    function handleScroll() {
        let top = ref.current.getBoundingClientRect().top
        if (top >= window.innerHeight * showHeight
                && top <= window.innerHeight * hideHeight) {
            setFocus(true)
            setShow(true)
        } else {
            setFocus(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const renderContent = () => {
        let output = ''
        for (let i = 0; i < node.content.length; i++) {
            for (let j = 0; j < node.content[i].children.length; j++) {
                output += node.content[i].children[j].text
            }
            output += "<br/>"
        }
        return output;
    }   

    function changeBackground(e, colour) {
        e.target.style.fill = colour;
    }

    const body = 
        <div>
            <h1 style={{textAlign: 'center'}}>{node.title}</h1>
            {node.content && <div dangerouslySetInnerHTML={{__html: renderContent()}} />}
            {node.collection &&
            <div className={classes.collectionContainer}>
                {transitions((style, item) => (
                    <animated.div style={{...style}}>
                        <div
                            onMouseEnter={(e) => {
                                e.target.style.fill = item.colour
                                e.target.style.scale = 1.2
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.fill = 'black'
                                e.target.style.scale = 1.0
                            }}
                            style={{width: 60, height: 60, transition: 'all ease-in-out 0.1s'}}
                            dangerouslySetInnerHTML={{__html: item.svg[0].children[0].text}}
                        />
                    </animated.div>
                ))}
            </div>}
        </div>

    if (isAnimated) {
        return (
            <animated.div
                className={classes.container}
                ref={ref}
                style={expand}
                >
                    {body}
            </animated.div>
        )
    } else {
        return (
            <animated.div
                className={classes.container} 
                ref={ref}
                style={shadow}
                >
                    {body}
            </animated.div>
        )
    }
}

Section.defaultProps = {
    animated: false,
}
