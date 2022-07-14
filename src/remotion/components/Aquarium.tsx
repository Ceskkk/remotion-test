import React, { useMemo } from 'react'
import { AbsoluteFill, random } from 'remotion'
import { Fish } from './Fish'

export const Aquarium = () => {

    const fishes = useMemo(() => {
        return new Array(100).fill(true).map((_, i) => {
            const randomFish = Math.round(random("randomFish" + i) * 2)
            const y = random("y" + i) * 100 + "%"
            const delay = random("delay" + i) * 340
            const size = random("size" + i) + 0.3
            return {randomFish, y, delay, size}
        })
    }, [])

    return(
        <AbsoluteFill>
            {fishes.map((props) => {
                return <Fish randomFish={props.randomFish} y={props.y} delay={props.delay} size={props.size} />
            })}
        </AbsoluteFill>
    )
}