import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   div:first-child {
      margin-right: 10px;
      
      >img {
         width: 100%;
      }
   }

   >div {
      position: relative;
      z-index: 999;
      text-align: center;
      

      p {
         font-size: 2rem;
         margin: 5px 0;
      }

      .name {
         font-family: 'Press Start 2P', cursive;
         font-size: 2.8rem;
      }
   }

   .spot {
      width: 100%;
      max-width: 35%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
   }

   .line {
      width: 100%;
      max-width: 30%;
      position: absolute;
      bottom: 0;
      right: 0;
   }

   .spot-mob {
      display: none;
   }

   .line-mob {
      display: none;
   }

   @media (max-width: 768px) {

      flex-direction: column;
      justify-content: flex-start;

      div:first-child {
      margin-right: 0;
      margin-top: 75px;
      
      img {
         width: 80%;
      }
    }

   >div {

      p {
         font-size: 1rem;
      }

      .name {
         font-size: 1.25rem;
      }
   }

   .spot {
      display: none;
   }

   .line {
      display: none;
   }

   .spot-mob {
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 9999;
   }

   .line-mob {
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
   }
}
`
