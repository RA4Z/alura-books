import styled from 'styled-components';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const ListaIcones = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ListaIcones>
            {icones.map((icone) => (
                <li><img src={icone} alt={icone} /></li>
            ))}
        </ListaIcones>
    )
}
export default IconesHeader;