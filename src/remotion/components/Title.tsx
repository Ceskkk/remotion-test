import {interpolate, useCurrentFrame, spring, useVideoConfig} from 'remotion'
 
export const Title= ({title}: {title:string}) => {

    const { fps } = useVideoConfig()
    const frame = useCurrentFrame()

    // Change value over time
    const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'})

    // Animation
    const scale = spring({fps, from: 0, to: 1, frame})
 
    return (
      <h1 style={{flex: 1, fontSize: 48, textAlign: 'center', color: 'white', opacity, paddingTop: 420, transform: `scaleX(${scale})`}}>{title}</h1>
    )
}