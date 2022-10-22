import styled from 'styled-components';

export const Container = styled.div`

   display: flex;

   @media (max-width: 425px) {
      padding-top: 25px;
      flex-direction: column;
   }
`