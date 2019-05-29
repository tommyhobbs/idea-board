import React from 'react';
import styled from 'styled-components';
import Idea from '../components/Idea';

const Frame = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'ideas'
    'footer';
  grid-template-rows: 2fr auto 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 20px;
  border: 10px outset #c19a6b;
`;

const Title = styled.h1`
  grid-area: title;
  align-self: center;
  justify-self: center;
  padding: 20px;
  margin: 20px;
  font-family: Kalam;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  border: 1px solid #bbb;
  transform: rotate(-2deg);
`;

const IdeaArea = styled.div`
  display: grid;
  grid-area: ideas;
  grid-template-columns: repeat(auto-fit, minMax(300px, auto));
  grid-auto-rows: min-content;
  justify-content: space-around;
  grid-gap: 10px;
`;

const Footer = styled.div`
  grid-area: footer;
  justify-self: end;
  align-self: flex-end;
  font-family: Kalam;
  color: hotpink;
  padding: 20px;
`;

const Board = props => {
  const { ideas } = props;
  return (
    <Frame>
      <Title>Idea Board</Title>
      <IdeaArea>
        {ideas.map(idea => (
          <Idea {...idea} />
        ))}
      </IdeaArea>
      <Footer>
        <p>
          A 4 hour experiment{' '}
          <span role="img" aria-label="timer emoji">
            ⏲️
          </span>{' '}
          by Tom Hobbs
        </p>
      </Footer>
    </Frame>
  );
};

export default Board;
