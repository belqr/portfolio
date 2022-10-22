import IMG01 from '../../../../assets/images/img-todo.png';
import { Container } from './style';

function Projects() {
   return(
      <Container>
         <h2> PROJETOS </h2>
         <section>
            <div className='box-img-projects'>
               <img src={IMG01} alt='Projeto To-do List' />
            </div>
            <div>
               <h3> To-do List </h3>
               <div>
                  <h4> Veja em: </h4>
                  <a href='https://project-todo-list-steel.vercel.app/' target='blank'> <p> https://project-todo-list-steel.vercel.app/ </p> </a>
                  <a href='https://github.com/belraposo/Project-Todo' target='blank'> <p> https://github.com/belraposo/Project-Todo </p> </a>
               </div>
            </div>
         </section>
      </Container>
   )
}
export default Projects;