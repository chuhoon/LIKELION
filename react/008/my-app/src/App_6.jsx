import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  const style = {
    marginRight: '30px',
  };
  return (
    <BrowserRouter>
      <Link to="/" style={style}>
        HomePage
      </Link>
      <Link to="/about" style={style}>
        AboutPage
      </Link>
      <Link to="/contact" style={style}>
        ContactPage
      </Link>
      <Link to="/blog" style={style}>
        BlogPage
      </Link>
      <Link to="/blogdetail/:id" style={style}>
        BlogDetailPage
      </Link>
      {/* 라우트를 감싸줍니다. */}
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/blog" exact component={BlogPage} />
      {/* 파라미터로 받게 된다. :id 동적인 페이지를 넣어주고 싶을때 */}
      <Route path="/blogdetail/:id" exact component={BlogDetailPage} />
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>HomePage</h1>;
}

function AboutPage() {
  return <h1>AboutPage</h1>;
}

function ContactPage() {
  return <h1>ContactPage</h1>;
}

function BlogPage() {
  return <h1>BlogPage</h1>;
}

function BlogDetailPage({ match }) {
  console.log(match);
  console.log(match.params.id);
  // http://localhost:3000/blogdetail:3
  return (
    <div>
      <h1>BlogDetailPage</h1>
      <p>{match.params.id}가 로드되었습니다.</p>
    </div>
  );
}

export default App;
