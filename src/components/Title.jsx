import styled from 'styled-components';

const Title = styled.div`
  grid-area: title;
  align-self: center;
  justify-self: center;
  font-family: Kalam;
  textarea {
    font-size: 30px;
    text-decoration: underline;
    resize: none;
    outline: none;
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
  }
  h3 {
    font-size: 15px;
    margin: 0;
  }
`;

export default Title;
