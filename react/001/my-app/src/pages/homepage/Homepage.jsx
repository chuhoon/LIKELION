import Header from '../../components/header/Header.jsx';
import Section from '../../components/section/Section.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './homepage.css';

export default function Homepage({ nickname, userName }) {
  // console.log(userName);
  return (
    <>
      <Header userName={userName} nickname={nickname} />
      <Section />
      <Footer />
    </>
  );
}
