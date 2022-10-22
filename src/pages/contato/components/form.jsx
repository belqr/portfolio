import { Container } from './style';

function Form() {
   return(
      <Container>
         <form>
            <i> <h3> Contate me </h3> </i>
            <input type='name' placeholder='nome' />
            <input type='email'placeholder='email' />
            <input type='text' placeholder='mensagem'/>
         </form>
            <button> Envie um email </button>
      </Container>
   )
}
export default Form;