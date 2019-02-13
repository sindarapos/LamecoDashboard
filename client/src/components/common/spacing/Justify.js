import styled from "styled-components";

const Justify = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  ${props => `
    justify-content: ${props.justifyContent || 'center'};
    align-items: ${props.alignItems || 'center'};`
  }
`;

export default Justify;