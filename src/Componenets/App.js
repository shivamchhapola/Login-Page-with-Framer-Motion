import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WebFont from 'webfontloader';
import DesktopLogin from './DesktopLogin';
import MobileLogin from './MobileLogin';
import './../CSS/App.css'

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
