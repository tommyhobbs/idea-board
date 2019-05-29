import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Bin from './Bin';
import Blurb from './Blurb';

const StyledIdea = styled.div`
  display: grid;
  grid-template-areas:
    'title bin'
    'blurb blurb';
  grid-template-rows: min-content 100px;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 20px;
  background-color: lightyellow;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;

const Idea = props => {
  const { timestamp, title, blurb } = props.idea;
  return (
    <StyledIdea>
      <Title>
        <textarea rows="1" maxLength="10" defaultValue={title} />
        <h3>{timestamp}</h3>
      </Title>
      <Bin onClick={() => props.onDelete(title)}>
        <span role="img" aria-label="bin emoji">
          🗑️
        </span>
      </Bin>
      <Blurb type="text" maxLength="140">
        {blurb}
      </Blurb>
    </StyledIdea>
  );
};

export default Idea;
