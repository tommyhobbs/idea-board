import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'ideas'
    'footer';
  grid-template-rows: 2fr 10fr 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
  margin: 20px;
  border: 10px outset #C19A6B;
`;

const Title = styled.h1`
  font-family: Kalam;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  padding: 10px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
  border: 1px solid #bbb;
  transform: rotate(-2deg);
`;

const IdeaArea = styled.div`
  display: grid;
  grid-area: ideas;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: auto;
  grid-gap: 40px;
`;

const Footer = styled.div`
  grid-area: footer;
  justify-self: end;
  align-self: flex-end;
  font-family: Kalam;
  color: hotpink;
  padding: 20px;
`;

const Board = () => (
  <Frame>
    <Title>Idea Board <span role='img' aria-label='bulb emoji'>💡</span></Title>
    <IdeaArea>
      <p> qwertyuiop</p>
      <p> qwertyuiop</p>
      <p> qwertyuiop</p>
      <p> qwertyuiop</p>
      <p> wertyuiop</p>
      <p> qwertyuiop</p>
      <p> qwertyuiop</p>
    </IdeaArea>
    <Footer>
      <p>A 4 hour experiment <span role='img' aria-label='timer emoji'>⏲️</span> by Tom Hobbs</p>
    </Footer>
  </Frame>
);

export default Board;
