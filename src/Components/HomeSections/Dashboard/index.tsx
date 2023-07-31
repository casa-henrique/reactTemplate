import { Container } from "./styles"
import { SectionHeader } from "../sectionHeader"
import { DashComponent } from "./DashComponent"

export function Dashboard () {
    
    return <Container>
        <SectionHeader type="dash"/>

        <div className="contentWrapper">
            <DashComponent type="avaliation"/>
            <DashComponent type="search"/>
            <DashComponent type="presentation"/>
        </div>
    </Container>
}