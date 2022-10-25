import { useState } from 'react';
import Block01 from '../../assets/images/blocks/block-1.png';
import Block02 from '../../assets/images/blocks/block-2.png';
import Block03 from '../../assets/images/blocks/block-3.png';
import Block04 from '../../assets/images/blocks/block-4.png';
import Block05 from '../../assets/images/blocks/block-5.png';
import ModalComponent from './components/modal/modal';
import { Container } from './style';


function Social() {
   const [isOpen, setIsOpen] = useState({
      open: false,
      title: '',
      txt: '',
   });

   const List = [
      {
         src: Block01, alt: 'Vida Terrestre', title: 'Vida Terrestre', txt: 'Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade'
      },
      {
         src: Block02, alt: 'Vida Animal', title: 'Vida Animal', txt: 'Adotar medidas urgentes para combater as alterações climáticas e os seus impactos' 
      },
      {
         src: Block03, alt: 'Vida Áquatica', title: 'Vida Áquatica', txt: 'Conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos para o desenvolvimento sustentável'
      },
      {
         src: Block04, alt: 'Lazer', title: 'Lazer', txt: 'Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades'
      },
      {
         src: Block05, alt: 'Educação Sexual', title: 'Educação Sexual', txt: 'Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos'
      },
   ]

   function openModal(title, txt) {
      setIsOpen({open: true, title: title, txt: txt});
    }

   return(
      <Container>
         <h2> OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL: </h2>
         <div>
            <hr />
            <p> Os Objetivos de Desenvolvimento Sustentável são um apelo municipal à ação para acabar com a violência contra os animais, proteger o meio ambiente e a integridade infantil e garantir que as pessoas e os animais, em todos os bairros, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais Teixeira de Freitas está lutando a fim de que possamos atingir as metas propostas.
            </p>
         </div>
         <section>
            {
               List.map(item => (
                  <img onClick={() => openModal(item.title, item.txt)} src={item.src} alt={item.alt} />
               ))
            }
            <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} title={isOpen.title} txt={isOpen.txt} />
         </section>
      </Container>
   )
}
export default Social;