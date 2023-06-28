import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    gap: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt='Logo Alura Books' />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}
export default Logo;