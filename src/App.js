import React, { useEffect } from 'react';
import MobileLogin from './MobileLogin';
import DesktopLogin from './DesktopLogin';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Dosis', 'Plus Jakarta Sans'],
      },
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div className="App">
        <MobileLogin />
        <DesktopLogin />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
