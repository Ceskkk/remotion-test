import { Sequence } from "remotion"
import { Aquarium } from "./components/Aquarium"
import { Title } from "./components/Title"

export const MyVideo = () => {
    return (
        <div style={{flex: 1, backgroundImage: 'url("https://m.media-amazon.com/images/I/71EUEG8orVL.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <Aquarium />
            <Sequence from={0} durationInFrames={60}>
                <Title title="Welcome to" />
            </Sequence>
            <Sequence from={60}>
                <Title title="the sea" />
            </Sequence>
        </div>
    )
}