import { useState } from 'react';
import { Container } from './style';

function Form() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');


   const changeName = (e) => {
      setName(e.target.value);
   }

   const changeEmail = (e) => {
      setEmail(e.target.value);
   }

   const changeMessage = (e) => {
      setMessage(e.target.value);
   }

   const Submit = () => {
      alert(`Enviar a '${message}' ?`)
   }

   return(
      <Container>
         <form>
            <i> <h3> Contate me </h3> </i>
            <input value={name} onChange={changeName} type='name' placeholder='nome' />
            <input value={email} onChange={changeEmail} type='email'placeholder='email' />
            <input value={message} onChange={changeMessage} type='text' placeholder='mensagem'/>
         </form>
            <button onClick={Submit}> Envie um email </button>
      </Container>
   )
}
export default Form;