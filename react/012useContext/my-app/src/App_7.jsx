import { useContext, createContext } from 'react';

const UserInfo = createContext({ name: 'gary', id: 'garyIsFree' });
const UserInfo2 = createContext({ name: '경훈', id: 'kyeonghoon' });

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloLicatTwo />
    </div>
  );
};

const HelloLicatTwo = () => {
  const { name, id } = useContext(UserInfo2);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};

export default App;
