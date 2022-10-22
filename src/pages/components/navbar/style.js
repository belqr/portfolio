import styled from 'styled-components';

export const Container = styled.div`
   background-color: #A5D663;
   width: 100%;
   max-width: 3.5rem;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: sticky;
   top: 0;
   z-index: 999999;

   .box-menu-mobile { 
      display: none;
   }

   .menu-mobile {
      width: 30px;
      margin: 10px;
      display: none;
   }

   .link-mobile {
      display: none;
   }

   >a {
      text-decoration: none;

      .icon-home {
         margin-top: 75px;
         width: 50px;
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

   @media (max-width: 425px) {
      max-width: 100%;
      height: auto;
      background-color: #A5D663;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;

      .box-menu-mobile { 
         width: 100%;
         display: inline-block;
      }

      .link-mobile {
         width: 100%;
         display: ${props => props.$isMenuOpen ? 'flex' : 'none'};
         flex-direction: column;
         gap: 15px;
         padding-bottom: 35px;
         transition: 0.3s ease-in;

         a {
            :hover {
               font-weight: 700;
               color: #fff;
            }
         }
      }

      .menu-mobile {
         display: inline-block;
         margin-left: 10px;
         cursor: pointer;
      }

      >a {

         .icon-home {
            display: none;
         }
      }

      >div {
         margin-top: 0;
         height: auto;
         display: none;
      }
   }
`