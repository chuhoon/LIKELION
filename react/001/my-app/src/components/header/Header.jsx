import Menu from '../menu/Menu.jsx';
import './header.css';

export default function Header({ userName, nickname }) {
  // console.log(userName);
  return (
    <div className="test">
      header, {userName}님 반갑습니다. 닉네임은 {nickname}이시군요.
      <Menu />
    </div>
  );
}
