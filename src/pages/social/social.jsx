import Block01 from '../../assets/images/blocks/block-1.png';
import Block02 from '../../assets/images/blocks/block-2.png';
import Block03 from '../../assets/images/blocks/block-3.png';
import Block04 from '../../assets/images/blocks/block-4.png';
import Block05 from '../../assets/images/blocks/block-5.png';
import { Container } from './style';

function Social() {
   return(
      <Container>
         <h2> OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL: </h2>
         <div>
            <hr />
            <p> Os Objetivos de Desenvolvimento Sustentável são um apelo municipal à ação para acabar com a violência contra os animais, proteger o meio ambiente e a integridade infantil e garantir que as pessoas e os animais, em todos os bairros, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais Teixeira de Freitas está lutando a fim de que possamos atingir as metas propostas.
            </p>
         </div>
         <section>
            <img src={Block01} alt='Vida Terrestre' />
            <img src={Block02} alt='Vida Animal' />
            <img src={Block03} alt='Vida Áquatica' />
            <img src={Block04} alt='Lazer' />
            <img src={Block05} alt='Educação Sexual' />
         </section>
      </Container>
   )
}
export default Social;