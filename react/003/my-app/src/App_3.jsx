import React, { useState } from 'react';

function App() {
  return <NavBar />;
}

function About() {
  return <h1>about</h1>;
}

function Product() {
  return <h1>product</h1>;
}

function Contact() {
  return <h1>contact</h1>;
}

function ChangeContainer({ listName }) {
  if (listName === 'about') {
    return <About />;
  } else if (listName === 'product') {
    return <Product />;
  } else if (listName === 'contact') {
    return <Contact />;
  } else {
    return <NotFound />;
  }
}

function NotFound() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        eaque molestias tempora maxime deleniti, sunt quibusdam explicabo
        pariatur eveniet voluptatibus dicta quam! Laborum delectus temporibus
        iste placeat sunt culpa cumque?
      </p>
    </div>
  );
}

function NavBar() {
  const [listName, setListName] = useState('about');
  const changeListName = function (e) {
    setListName(e.target.id);
  };
  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={
              listName === 'about' ? { color: 'blue' } : { color: 'black' }
            }
            onClick={changeListName}
          >
            about
          </li>
          <li
            id="product"
            style={
              listName === 'product' ? { color: 'blue' } : { color: 'black' }
            }
            onClick={changeListName}
          >
            product
          </li>
          <li
            id="contact"
            style={
              listName === 'contact' ? { color: 'blue' } : { color: 'black' }
            }
            onClick={changeListName}
          >
            contact
          </li>
          <li id="notfound" onClick={changeListName}>
            notfound
          </li>
        </ul>
      </nav>
      <ChangeContainer listName={listName} />
    </>
  );
}

export default App;
