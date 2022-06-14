import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  const styleMargin = {
    marginRight: '30px',
  };
  return (
    <BrowserRouter>
      <Link to="/" style={styleMargin}>
        HomePage
      </Link>
      <Link to="/about" style={styleMargin}>
        AboutPage
      </Link>
      <Link to="/contact" style={styleMargin}>
        ContactPage
      </Link>
      <Link to="/blog">BlogPage</Link>
      {/* 라우트를 감싸줍니다. */}
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/blog" component={BlogPage} />
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

function AboutPage() {
  return <h1>어바웃 페이지</h1>;
}

function ContactPage() {
  return <h1>컨텍트 페이지</h1>;
}

function BlogPage() {
  return <h1>블로그 페이지</h1>;
}

export default App;
