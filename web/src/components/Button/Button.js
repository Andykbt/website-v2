import React, { useState } from 'react'
import * as classes from './Button.module.css'
import { useSpring, animated, config } from 'react-spring'

export default function Button({background, colour, to, submit, title, ...styles}) {
    const [hover, setHover] = useState(false);

    const pop = useSpring({
        transform: hover ? 'perspective(800px) translate3d(0px, 0px, 43px)' : 'perspective(800px) translate3d(0px, 0px, 0px)',
        backgroundColor: background,
        config: config.wobbly
    })

    console.log
    return (
        <div className={classes.container} style={styles}>
            <animated.div
                className={classes.background}
                style={pop}/>

            <div
                className={classes.child}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {submit ?
                    <input
                        type='submit'
                        value={title}   
                        style={{ color: colour }}
                    />
                : to ?
                    <a href={to} style={{ color: colour }}>{title}</a>
                :   <span style={{ color: colour }}>{title}</span>
                }
            </div>
        </div>
    )
}

Button.defaultProps = {
    background: "#4F23E2",
    colour: "white",
    title: "Button",
}