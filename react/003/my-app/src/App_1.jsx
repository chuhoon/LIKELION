function App() {
  return <Hello name="경훈" />;
}

function Hello({ name }) {
  if (name) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
  return <Noname />;
}

function Noname() {
  return <h1>이름 없음</h1>;
}

export default App;
