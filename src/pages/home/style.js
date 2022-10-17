import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;

   div:first-child {
      border: 2px solid red;
   }

   >div {
      border: 2px solid purple;
      position: relative;
      z-index: 999;

      p {
         font-size: 30px;
      }

      .name {
         font-family: 'Press Start 2P', cursive;
         font-size: 40px;
      }
   }

   .spot {
      width: 100%;
      max-width: 650px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
   }

   .line {
      width: 100%;
      max-width: 350px;
      position: absolute;
      bottom: 0;
      right: 0;
   }
`
