function App() {
  function Test(props) {
    console.log(props);
    return <h1>hello Test</h1>;
  }
  return (
    <div className="App">
      {[
        <h1 key="1">hello 1</h1>,
        <h1 key="2">hello 1</h1>,
        <h1 key="3">hello 1</h1>,
        <h1 key="4">hello 1</h1>,
        <h1 key="5">hello 1</h1>,
        <Test key="6" a="10" b="20" c="30">
          {[
            <h1 key="7">hello 1</h1>,
            <h1 key="8">hello 1</h1>,
            <h1 key="9">hello 1</h1>,
          ]}
        </Test>,
      ]}
    </div>
  );
}

export default App;
