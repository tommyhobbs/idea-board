import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Idea from './components/Idea';
import Add from './components/Add';
import defaultIdeas from './defaultIdeas';

const Frame = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'add'
    'ideas'
    'footer';
  grid-template-rows: 2fr 0.5fr auto 1fr;
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

class App extends React.Component {
  state = {
    ideas: defaultIdeas
  };

  onDelete = idea => {
    console.log(idea.title);
    this.setState({
      ideas: this.state.ideas.filter(i => i.title !== idea.title)
    });
  };

  onCreate = () => {
    const newIdea = {
      timestamp: moment().format('ddd, h:m:sA'),
      title: '',
      blurb: ''
    };
    this.setState({
      ideas: [newIdea, ...this.state.ideas]
    });
  };

  render() {
    return (
      <Frame>
        <Title>Idea Board</Title>
        <Add onClick={this.onCreate}>
          Create
          <span role="img" aria-label="create emoji">
            📝
          </span>
        </Add>
        <IdeaArea>
          {this.state.ideas.map((idea, i) => (
            <Idea
              key={i + idea.title}
              idea={idea}
              onDelete={() => this.onDelete(idea)}
            />
          ))}
        </IdeaArea>
        <Footer>
          <p>
            created by{' '}
            <a href="https://www.linkedin.com/in/tommyhobbs/">Tom Hobbs</a>
          </p>
        </Footer>
      </Frame>
    );
  }
}

export default App;
