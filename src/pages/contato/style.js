import styled from 'styled-components';

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
      width: 85%;
      display: flex;
      justify-content: space-evenly;

      .box-contact-me {
         width: 100%;
         display: flex;
         flex-direction: column;

         div:first-child {
            margin: 25px 0;
            width: 100%;
            display: flex;
            flex-direction: column;

            h3 {
               font-size: 26px;
               font-weight: 600;
            }
   
            p {
               font-size: 22px;
            }
         }

         div:last-child {
            margin: 25px 0;
            padding-left: 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            border-left: 3px solid #C2E198;

            a {
               text-decoration: none;
            }

            p {
               padding: 5px 0;
               font-size: 20px;
            }

            .p-curriculum {
               width: fit-content;
               border-bottom: 1px solid black;
            }
         }
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
         width: 85%;
         display: flex;
         flex-direction: column;
         justify-content: space-evenly;

         .box-contact-me {
            width: 100%;
            display: flex;
            flex-direction: column;

            div:first-child {
               margin: 25px 0;
               width: 100%;
               display: flex;
               flex-direction: column;

               h3 {
                  font-size: 1.3rem;
               }
      
               p {
                  font-size: 20px;
               }
            }

            div:last-child {
               margin: 25px 0;
               padding-left: 10px;
               width: 100%;
               display: flex;
               flex-direction: column;
               border-left: 3px solid #C2E198;

               a {
                  text-decoration: none;
               }

               p {
                  padding: 5px 0;
                  font-size: 16px;
               }
            }
         }
      }   
   }
`