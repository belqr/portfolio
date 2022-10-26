import Cat01 from '../../../../assets/images/cats/cat-01.png';
import Cat02 from '../../../../assets/images/cats/cat-02.png';
import Cat03 from '../../../../assets/images/cats/cat-03.png';
import Cat04 from '../../../../assets/images/cats/cat-04.png';
import Cat05 from '../../../../assets/images/cats/cat-05.png';
import { Container } from './style';

function Animals() {
   return(
      <Container>
         <h2> MOTIVAÇÃO </h2>
         <section>
            <div>
               <img src={Cat01} alt='Gata' />
               <img src={Cat02} alt='Gata' />
               <img src={Cat03} alt='Gat3' />
               <img src={Cat04} alt='Gato' />
               <img src={Cat05} alt='Gata' />
            </div>
            <div>
               <hr />
               <p> Esses são os meus gatinhos, meu maior bem terreno, os resgatei em situação de rua, alguns doentes que até passaram por cirurgia, e até perdi uma que não aguentou a maldade humana. Sempre tive muito amor por animais, pela natureza em si, e quero fazer parte de algo maior, penso muito em ingressar como programadora em um local onde o foco seja o cuidado com nosso planeta, e espero alcançar essa realização profissional. </p>
            </div>
         </section>
      </Container>
   )
}
export default Animals;