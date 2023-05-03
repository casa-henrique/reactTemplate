import {Container} from "./styles"
import {AiFillWarning} from "react-icons/ai"

interface WarningProps {
    message: string
}

export function Warning({message}: WarningProps) {
    return <Container><AiFillWarning/><p>{message}</p></Container>
}