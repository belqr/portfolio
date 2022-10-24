import { Container } from './style';

function Card({title, img, view, link, link2, txt, txt2}) {
   return(
      <Container>
         <div className='box-img-projects'>
            <img src={img} alt='Projects' />
         </div>
         <div>
            <h3> {title} </h3>
            <div>
               <h4> {view} </h4>
               <a href={link}> <p> {txt} </p> </a>
               <a href={link2}> <p> {txt2} </p> </a>
            </div>
         </div>
      </Container>
   )
}
export default Card;