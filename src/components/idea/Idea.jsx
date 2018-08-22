import React from 'react';
import styled from 'styled-components';

const Postit = styled.div`
  display: grid;
  grid-template-areas:
    'title bin'
    'blurb blurb';
  grid-template-rows: min-content 100px;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 20px;
  background-color: lightyellow;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
`;

const Title = styled.div`
  grid-area: title;
  align-self: flex-start;
  justify-self: center;
  font-family: Kalam;

  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 15px;
  }

`;

const Bin = styled.button`
  grid-area: bin;
  padding: 20px;
  background: none;
  span {
    font-size: 30px;
  }
`;

const Blurb = styled.textarea`
  grid-area: blurb;
  font-family: Kalam;
  font-size: 15px;
`;

const Idea = (props) => {
  const { timestap, title, blurb } = props;
  return (
    <Postit>
      <Title>
        <h2>{title}</h2>
        <h3>{timestap}</h3>
      </Title>
      <Bin><span role='img' aria-label='bin emoji'>🗑️</span></Bin>
      <Blurb type='text' maxLength='140'>{blurb}</Blurb>
    </Postit>
  );
};

export default Idea;
