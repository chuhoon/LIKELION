import './App.css';

function Menu() {
  return <div>menu</div>;
}

function Header() {
  return (
    <div>
      header
      <Menu />
    </div>
  );
}

function Section() {
  return <div>section</div>;
}

function Footer() {
  return <div>footer</div>;
}

function App() {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
