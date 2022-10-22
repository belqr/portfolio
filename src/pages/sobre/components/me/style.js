import styled from 'styled-components' ;

export const Container = styled.div`
   margin: 50px 0;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;

   h2 {
      margin-bottom: 50px;
      padding: 10px;
      width: fit-content;
      text-align: center;
      font-size: 2.5rem;
      font-weight: 500;
      font-family: 'Concert One', cursive;
      border-bottom: 6px solid #C2E198;
   }

   section {
      width: 100%;
      max-width: 85%;
      display: flex;

      hr {
         border: 2px solid #C2E198;
      }

      p {
         margin-left: 10px;
         font-size: 20px;
         text-align: justify;
      }
   }

   @media (max-width: 768px) {
      margin: 25px 0;

      h2 {
         margin-bottom: 25px;
         font-size: 1.75rem;
         border-bottom: 4px solid #C2E198;
      }

      section {
         width: 100%;
         max-width: 85%;
         display: flex;

         hr {
            border: 2px solid #C2E198;
         }

         p {
            font-size: 16px;
         }
      }
   }

`