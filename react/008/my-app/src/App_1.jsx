import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 라우트를 감싸줍니다. */}
        <Route path="/" component={Index} />
        <Route path="/one" component={One} />
        <Route path="/one/extend" component={OnExtend} />
        <Route path="/two" component={Two} />
        <Route path="/three" component={Three} />
      </BrowserRouter>
    </div>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One() {
  return <h1>hello world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function OnExtend() {
  return <h1>hello oneExtend</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
