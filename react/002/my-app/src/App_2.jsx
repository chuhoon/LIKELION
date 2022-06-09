import { React, useState } from 'react';

function Resume() {
  const [like, setLike] = useState(0);

  function handleClickLike() {
    setLike(like + 1);
    console.log(like);
  }

  return (
    <div>
      <button onClick={handleClickLike}>like:{like}</button>
    </div>
  );
}

// function DisappearBtn)
//  {

//  }
function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;
