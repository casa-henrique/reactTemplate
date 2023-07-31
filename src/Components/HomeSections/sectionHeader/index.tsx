import { useEffect, useState } from 'react';
import {Container} from './styles'

interface SectionHeaderProps {
    type: string
}
export function SectionHeader({type}: SectionHeaderProps) {
    const[userInfos, setUserInfos] = useState<any>()

    useEffect(() => {
        const user = localStorage.getItem('user');
    
        if(user) {
          const userObject = JSON.parse(user)
          setUserInfos(userObject)
        }
      }, []);
      
    return <Container>
        {type == "dash" ? <p>
        Bem-vindo(a) <span>{userInfos ? userInfos.user.name : null}</span>
        </p> : null}
        {type == "team" ? <p>
        Turmas <span>{userInfos ? userInfos.user.name : null}</span>
        </p> : null}
        {type == "library" ? <p>Acompanhe nossa
        <span>Biblioteca</span>
        </p> : null}
    </Container>
}