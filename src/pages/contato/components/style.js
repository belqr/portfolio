import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;

   form {
      padding: 0 15px;
      width: 100%;
      display: flex;
      flex-direction: column;

      h3 {
         margin: 25px 0;
         font-size: 26px;
         font-weight: 700;
      }

      input {
         margin: 15px 0;
         padding: 5px 0;
         border: none;
         border-bottom: 1px solid #487D4D;
         outline: 0;
      }

   }

   button {
      margin: 25px 0;
      padding: 15px;
      width: 100%;
      max-width: 200px;
      background-color: #487D4D;
      border: none;
      color: #FFF;
      font-size: 15px;
      font-weight: 600;
      border-radius: 2em;
      cursor: pointer;
      transition: 0.25s ease;

      :hover {
         background-color: #fff;
         box-shadow: 9px 10px 6px 0px rgba(201,199,199,0.64);
         -webkit-box-shadow: 9px 10px 6px 0px rgba(201,199,199,0.64);
         -moz-box-shadow: 9px 10px 6px 0px rgba(201,199,199,0.64);
         color: #487D4D;
      }
   }

   @media (max-width: 768px) {
      form {
         padding: 0;

         h3 {
            font-size: 1.3rem;
         }
      }
   }
`