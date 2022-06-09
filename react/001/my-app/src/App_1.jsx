import './App.css';

function App() {
  const name = '경훈';
  function age() {
    return 10;
  }
  const 값 = false;
  const someStyle = { color: 'green' };

  let today = new Date();
  const text1 = today.getFullYear();
  const text2 = '월/일 : ' + today.getMonth() + '/' + today.getDay();
  const text3 =
    '시간:' +
    today.getHours() +
    '시 ' +
    today.getMinutes() +
    '분 ' +
    today.getSeconds() +
    '초';
  return (
    <div>
      {/* 주석 */}
      <h1 className="red">hello world</h1>
      {/* 중괄호 1개는 js 2개는 css */}
      <h1 style={{ color: 'blue' }}>hello world</h1>
      <h1>
        hello {name}, {age()}
      </h1>
      <p>{값 ? 'one' : 'two'}</p>
      <h1 style={someStyle}>hello world</h1>
      <div className="cont-question1">
        <h1 className="red">{text1}</h1>
        <h1 className="white">{text2}</h1>
        <h1 className="white">{text3}</h1>
      </div>
    </div>
  );
}

export default App;
