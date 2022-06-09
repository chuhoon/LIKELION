import './App.css';
import Homepage from './pages/homepage/Homepage.jsx';
import Login from './pages/a/Login.jsx';

function App() {
  const user = {
    login: true,
    id: 'kyeonghoon',
    nickname: 'hoony',
  };
  return (
    <div>
      {user.login ? (
        <Homepage userName={user.id} nickname={user.nickname} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
