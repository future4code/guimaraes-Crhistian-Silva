import logoTdmdb from '../../assets/logo.svg';
import { Container } from './styleHader';

export function Header() {
    return (
      <Container>  
        <header>
            <img src={logoTdmdb} alt="Tmdb logo" />
        </header>
      </Container>  
    )
}