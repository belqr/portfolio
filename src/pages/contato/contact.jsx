import Form from './components/form';
import { Container } from './style';

function Contact() {

   return(
      <Container>
         <h2> Contato </h2>
         <section>
            <div className='box-contact-me'>
               <div>
                  <i> <h3> Quer falar comigo? </h3> </i>
                  <p> Me mande uma mensagem! </p>
               </div>
               <div>
                  <p> +55 (73) 9 9965-7784 </p>
                  <p> belqrdev@outlook.com </p>
                  <a href='https://drive.google.com/file/d/1d3PBrvxfndSOlorVMmTfb0u9WnWrepaX/view?usp=sharing' target='blank'> <p className='p-curriculum'> Curriculum </p> </a>
               </div>
            </div>
            <Form />
         </section>
      </Container>
   )
}
export default Contact;