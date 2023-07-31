import { ScheduleComponent } from '../../ScheduleComponent'
import { SectionHeader } from '../sectionHeader'
import {Container} from './styles'

export function MyTeams() {
    return <Container>
        <SectionHeader type="team"/>

        <ScheduleComponent />
    </Container>
}