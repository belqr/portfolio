import Modal from 'react-modal';
import { Container } from './style';

const customStyles = {
   content: {
      width: '40%',
      height: '50%',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '2em',
      border: '3px solid #C2E198'
   },
 };


const ModalComponent = ({isOpen, setIsOpen, title, txt}) => {
 
   function closeModal() {
     setIsOpen({open: false, title: '', txt: ''});
   }

  return (
   <Container>
      <Modal
         isOpen={isOpen.open}
         onRequestClose={closeModal}
         style={customStyles}
         contentLabel='Example Modal'
      >
         <button onClick={closeModal}> X </button>
         <h2> {title} </h2>
         <p> {txt} </p>
      </Modal>
   </Container>
  )
}

export default ModalComponent;