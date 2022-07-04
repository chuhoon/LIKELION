import MyRouter from "./Router";
import {useState, useEffect} from "react"
import { authServie } from "../fBase";

function App() {
  const [isLogin, setIsLogin] = useState(authServie.currentUser);
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    authServie.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  })

  return (
    init ? <MyRouter isLogin={isLogin}></MyRouter> : "로딩중..."
  );
}

export default App;