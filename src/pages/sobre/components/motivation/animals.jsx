import Cat from '../../../../assets/images/cats/cat-01.png';
import { Container } from './style';

function Animals() {
   return(
      <Container>
         <h2> MOTIVAÇÃO </h2>
         <section>
            <div>
               <img src={Cat} alt='Gata' />
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