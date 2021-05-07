import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  & + & {
    margin-top: 10px;
  }
`;
export const InfoIcon = styled.div`
  width: 35px;
  font-size: 16px;
`;
