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
  const {
    handleChange,
    onDelete,
    idea: { id, timestamp, title, blurb }
  } = props;

  return (
    <StyledIdea key={id}>
      <Title>
        <textarea
          autoFocus
          rows="1"
          maxLength="12"
          value={title}
          onChange={e => handleChange('title', e.target.value, id)}
        />
        <h3>{timestamp}</h3>
      </Title>
      <Bin onClick={onDelete}>
        <span role="img" aria-label="bin emoji">
          🗑️
        </span>
      </Bin>
      <Blurb
        maxLength="140"
        value={blurb}
        onChange={e => handleChange('blurb', e.target.value, id)}
      />
    </StyledIdea>
  );
};

export default Idea;
