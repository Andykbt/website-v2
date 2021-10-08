import React, { useState} from 'react'
import { useForm } from 'react-hook-form'
import { useSpring, config, animated } from 'react-spring'
import Button from '../Button/Button';
import * as classes from './Footer.module.css'

export default function Footer() {
    const { register, handleSubmit, errors } = useForm();
    const [hover, setHover] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
    }

    const pop = useSpring({
        transform: hover ? 'perspective(800px) translate3d(0px, 0px, 43px)' : 'perspective(800px) translate3d(0px, 0px, 0px)',
        config: config.wobbly
    })

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 250}}>
            <h1 style={{color: 'white'}}>Interested to work on something?</h1>

            <div style={{width: '50%'}}>
                <Button to={'mailto:andy.truong2001@gmail.com'} title={'Send me a message'} background={'white'} colour={'#4f23E2'}/>
            </div>
        </div>
    )
}
