import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  & + & {
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  }
`;
