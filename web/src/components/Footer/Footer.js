import React, { useState} from 'react'
import { useForm } from 'react-hook-form'
import { useSpring, config, animated } from 'react-spring'
import Button from '../Button/Button';
import * as classes from './Footer.module.css'

export default function Footer() {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{color: 'white'}}>Interested to work on something?</h1>

            <div style={{width: '50%'}}>
                <Button to={'mailto:andy.truong2001@gmail.com'} title={'Send me a message'} background={'white'} colour={'#4f23E2'}/>
            </div>
        </div>
    )
}
