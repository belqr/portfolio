import { Container } from './style';
import Photo from '../../assets/images/circle-photo.png';
import Spot01 from '../../assets/images/spot-green1.png';
import Line from '../../assets/images/line-green.png';
import Spot02 from '../../assets/images/spot-green2.png'
import Line1 from '../../assets/images/line-1.png';

function Home() {
   return(
      <Container>
         <div>
            <img src={Photo} alt='Foto Pessoal' />
         </div>
         <div>
            <p> Olá, eu sou a </p>
            <p className='name'> ISABEL QUEIROZ,| </p>
            <p> desenvolvedora front-end </p>
         </div>
         <img src={Spot01} alt='Spot' className='spot'/>
         <img src={Line} alt='Line' className='line'/>

         <img src={Spot02} alt='Spot' className='spot-mob'/>
         <img src={Line1} alt='Line' className='line-mob'/>
      </Container>
   )
}

export default Home;
