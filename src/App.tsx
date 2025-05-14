import React, { useCallback, useEffect } from 'react';
import { Main } from './pages/Main';
import WOW from 'wow.js';
import { ParallaxProvider } from 'react-scroll-parallax';

const App: React.FC = () => {
  const wowInit = useCallback(() => {
    new WOW().init();
  }, []);

  useEffect(() => {
    wowInit();
  }, [wowInit]);
  return (
    <ParallaxProvider>
      <Main />
    </ParallaxProvider>
  );
};

export default App;
