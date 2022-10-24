import Card from './components/card/card';
import { Container } from './style';
import IMG01 from '../../../../assets/images/img-calculator.png';
import IMG02 from '../../../../assets/images/img-counter.png';
import IMG03 from '../../../../assets/images/img-hp.png';
import IMG04 from '../../../../assets/images/img-todo.png';

function Projects() {
   return(
      <Container>
         <h2> PROJETOS </h2>
         <section>
            <Card img={IMG01} title='Projeto Calculadora' view='Veja em:' link='https://project-calculator-seven.vercel.app/'  txt='https://project-calculator-seven.vercel.app/' link2='https://github.com/belraposo/Project-Calculator' txt2='https://github.com/belraposo/Project-Calculator' />
            <Card img={IMG02} title='Projeto Counter' view='Veja em:' link='https://project-counter-psi.vercel.app/'  txt='https://project-counter-psi.vercel.app/' link2='https://github.com/belraposo/Project-Counter' txt2='https://github.com/belraposo/Project-Counter' />
            <Card img={IMG03} title='Projeto Green Witch' view='Veja em:' link='https://green-witch-api.vercel.app/'  txt='https://green-witch-api.vercel.app/' link2='https://github.com/belraposo/green-witch-api' txt2='https://github.com/belraposo/green-witch-api' />
            <Card img={IMG04} title='Projeto To-Do List' view='Veja em:' link='https://project-todo-list-steel.vercel.app/'  txt='https://project-todo-list-steel.vercel.app/' link2='https://github.com/belraposo/Project-Todo' txt2='https://github.com/belraposo/Project-Todo' />
         </section>
      </Container>
   )
}
export default Projects;