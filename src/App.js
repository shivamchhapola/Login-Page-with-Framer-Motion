import React from 'react';
import MobileLogin from './MobileLogin';
import DesktopLogin from './DesktopLogin';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

function App() {
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
