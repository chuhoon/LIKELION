import styled from 'styled-components';

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <ContentDiv>
      <ContentH2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam debitis,
        corrupti illum quidem rem neque nulla voluptatem expedita saepe quod
        iusto nisi maxime sequi voluptatum odit mollitia ullam porro dolores?
      </ContentH2>
    </ContentDiv>
  );
}

export default App;
