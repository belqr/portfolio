import styled from 'styled-components';

export const Container = styled.div`
   background-color: #A5D663;
   width: 100%;
   max-width: 3.5rem;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;

   .menu-mobile {
      width: 50px;
      margin: 10px 0;
      display: none;
   }

   >a {
      text-decoration: none;

      .icon-home {
         width: 50px;
         margin-top: 50px;
      }
   }
 

   >div {
      margin-top: 125px;
      height: 32vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      >a {
      text-decoration: none;

         >img {
            width: 100%;
            max-width: 35px;
         }
      }

   }

   @media (max-width: 375px) {
      background-color: #fff;

      .menu-mobile {
         display: inline-block;
      }

      >div {
         display: none;
      }
   }
`