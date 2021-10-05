import React from 'react'
import * as classes from './Socials.module.css'

import { FiGithub, FiMail } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
export default function Socials() {
    return (
        <div className={classes.container}>
            <a className={classes.socialLink} href={'https://www.linkedin.com/in/andy-truong-591449216/'}><FaLinkedinIn size={'1.25em'}/></a>
            <a className={classes.socialLink} href={'https://github.com/Andykbt'}><FiGithub size={'1.25em'}/></a>
            <a className={classes.socialLink} href={'mailto:andy.truong2001@gmail.com'}><FiMail size={'1.25em'}/></a>
        </div>
    )
}
