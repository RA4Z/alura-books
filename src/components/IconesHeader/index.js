import './styles.css'
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li><img src={icone} alt={icone} /></li>
            ))}
        </ul>
    )
}
export default IconesHeader;