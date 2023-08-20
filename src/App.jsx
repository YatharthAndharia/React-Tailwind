import Header from './components/displaycomponents/Header';
import Banner from './components/displaycomponents/Banner';
import { useState, useEffect } from 'react';

function App() {
  const [menuToggle, setMenuToggle] = useState(true);
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <>
      <Header menuToggle={menuToggle} toggleMenu={toggleMenu}></Header>
      <Banner menuToggle={menuToggle}></Banner>
    </>
  );
}

export default App;
