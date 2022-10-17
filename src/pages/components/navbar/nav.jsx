import { Link } from 'react-router-dom';
import { Container } from './style';
import Menu from '../../../assets/images/menu.png';
import iconHome from '../../../assets/images/icon-home.png';
import Dot01 from '../../../assets/images/dot-green1.png';
import Dot02 from '../../../assets/images/dot-green2.png';
import Dot03 from '../../../assets/images/dot-green3.png'

function Nav() {
   return(
      <Container>
         <img src={Menu} alt='Menu' className='menu-mobile'/>
         <Link to='/'> <img src={iconHome} alt='Home' className='icon-home'/> </Link>
         <div>
            <Link to='/about'> <img src={Dot01} alt='Home' /> </Link>
            <Link to='/social'> <img src={Dot02} alt='Social' /> </Link>
            <Link to='/contact'> <img src={Dot03} alt='Contato' /> </Link>
         </div>
   </Container>
   )
}
export default Nav