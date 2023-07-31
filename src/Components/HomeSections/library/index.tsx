import { SectionHeader } from '../sectionHeader'
import {Container} from './styles'

export function Library () {
    return <Container>
        <SectionHeader type="library"/>
        <div className='soon'>
            <p>Em Breve</p>
        </div>
    </Container>
}