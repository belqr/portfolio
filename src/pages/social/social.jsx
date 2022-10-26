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
         src: Block01, alt: 'Vida Terrestre', title: 'Vida Terrestre', txt: 'Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a degradação de zonas de mata em proteção ambiental e travar a perda da biodiversidade nessas zonas.'
      },
      {
         src: Block02, alt: 'Vida Animal', title: 'Vida Animal', txt: 'Adotar medidas urgentes para combater á violência aos animais, também como impedir o abandono animal, e criar  penas e multas para o tutor que abandonar o animal ou mantiver em situações insalubres. Criar ONGS com apoio da prefeitura para acolhimento de animais em situação de rua e criação de UBS (Unidade Básica de Saúde) voltada para atendimento animais de pequeno e grande porte.' 
      },
      {
         src: Block03, alt: 'Vida Aquática', title: 'Vida Aquática', txt: 'Conservar e usar de forma sustentável a água, mantendo nossos córregos e lagos da cidade limpos para manter o equilíbrio aquático, e presevar a vida aquática.'
      },
      {
         src: Block04, alt: 'Lazer', title: 'Lazer', txt: 'Garantir o acesso ao lazer para todos de forma inclusiva, limpando praças públicas, plantando árvores frutíferas para todos possam usufruir de forma consciente, e adicionando brinquedos para crianças, e quadras esportivas para todos.'
      },
      {
         src: Block05, alt: 'Educação Sexual', title: 'Educação Sexual', txt: 'Garantir o acesso à educação sexual para crianças, assim evitando absusos sexuais, e auxiliando e também incentivando crianças a denunciarem qualquer forma de abuso sofrida, dentro ou fora do convívio familiar.'
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