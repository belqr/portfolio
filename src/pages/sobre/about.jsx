import Me from './components/me/me';
import Animals from './components/motivation/animals';
import Projects from './components/projects/project';
import Spot3 from '../../assets/images/spot-green3.png';
import { Container } from './style';

function About() {
   return(
      <Container>
         <Me />
         <Animals />
         <Projects />
         <img src={Spot3} alt='Spot' className='spot3' />
      </Container>
   )
}
export default About;