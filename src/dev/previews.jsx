import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Homepage from "../Pages/Home/Homepage.tsx";
import InfoAlert from "../Alert/InfoAlert.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Homepage">
                <Homepage/>
            </ComponentPreview>
            <ComponentPreview path="/InfoAlert">
                <InfoAlert/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews