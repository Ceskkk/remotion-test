import Fish1 from '../svg/Fish1'
import Fish2 from '../svg/Fish2'
import Fish3 from '../svg/Fish3'
import { interpolate, useCurrentFrame } from 'remotion'

export const Fish = ({randomFish, delay, y, size}: {randomFish: number, delay: number, y: string, size: number}) => {

    const frame = useCurrentFrame()

    const left = interpolate(frame-delay, [0, 120], [100, 160])
    let fish: any

    switch(randomFish){
        case 0: fish = <Fish1 />
            break
        case 1: fish = <Fish2 />
            break
        case 2: fish = <Fish3 />
            break
    }

    return (
        <div style={{
            width: 100,
            position: 'absolute',
            left: left + "%",
            top: y,
            transform: `scale(${size})`
        }}>
            {fish}
        </div>
    )
}