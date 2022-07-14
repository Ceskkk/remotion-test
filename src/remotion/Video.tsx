import React from "react"
import { Composition } from "remotion"
import { MyVideo } from "./MyVideo"
 
export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  )
}