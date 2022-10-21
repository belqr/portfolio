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
      width: 100%;
      max-width: 900px;
      display: flex;
      box-shadow: 9px 10px 6px 0px rgba(201,199,199,0.64);
      -webkit-box-shadow: 9px 10px 6px 0px rgba(201,199,199,0.64);
      -moz-box-shadow: 9px 10px 6px 0px rgba(201,199,199,0.64);
      border-radius: 1em;

      img {
         margin: 25px;
         width: 100%;
         max-width: 475px;
         border-radius: 1em;
      }

      >div {
         margin: 25px 25px 25px 0;;
         width: 100%;
         display: flex;
         flex-direction: column; 
         align-items: center;

         h3 {
            margin: 10px;
            padding: 0 10px;
            width: fit-content;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 500;
            font-family: 'Concert One', cursive;
            border-left: 3px solid #C2E198;
         }

         >div {
            margin-top: 25px;
            padding-left: 10px;
            border-left: 3px solid #C2E198;

            h4 {
               margin-bottom: 15px;
               font-weight: 600;
               font-size: 1.25rem;
            }

            p {
               width: 100%;
               text-align: left;
               font-size: 14px;
            }
         }
      }
   }
`