import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginElements from './LoginElements';
import SignUpElements from './SignUpElements';
import './DesktopLogin.css';

const ConVariants = {
  open: {
    width: '65%',
    backgroundColor: '#E2E8F0',
    transition: {
      duration: 0.5,
    },
  },
  close: {
    width: '35%',
    backgroundColor: '#2D3748',
    transition: {
      duration: 0.5,
    },
  },
};

const InputVariants = {
  open: {
    opacity: 1,
    width: '55%',
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: 'block',
    },
  },
  close: {
    opacity: 0,
    width: '70%',
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const ButtonVariants = {
  open: {
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    width: '55%',
    transition: {
      duration: 0.5,
    },
  },
  close: {
    backgroundColor: '#E2E8F0',
    color: '#2D3748',
    width: '65%',
    transition: {
      duration: 0.5,
    },
  },
};

export default function DesktopLogin() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      <motion.div className="Desktop">
        <motion.div
          className="Container"
          layout
          initial={isLogin ? 'open' : 'close'}
          animate={isLogin ? 'open' : 'close'}
          variants={ConVariants}>
          <motion.div variants={InputVariants} style={{ height: '60%' }}>
            <LoginElements className="Elements"/>
          </motion.div>
          <motion.div
            style={{ height: '60%' }}
            className="CloseTitle"
            variants={InputVariants}
            initial={isLogin ? 'close' : 'open'}
            animate={isLogin ? 'close' : 'open'}>
            <h2 style={{ position: 'relative', top: '40%' }}>
              Already a <br />
              member?
            </h2>
          </motion.div>
          <motion.button
            onClick={() => setIsLogin(true)}
            className="BtnField"
            variants={ButtonVariants}>
            Login
          </motion.button>
        </motion.div>
        <motion.div
          className="Container"
          layout
          initial={isLogin ? 'close' : 'open'}
          animate={isLogin ? 'close' : 'open'}
          variants={ConVariants}>
          <motion.div variants={InputVariants} style={{ height: '60%' }}>
            <SignUpElements className="Elements" />
          </motion.div>
          <motion.div
            style={{ height: '60%' }}
            className="CloseTitle"
            variants={InputVariants}
            initial={isLogin ? 'open' : 'close'}
            animate={isLogin ? 'open' : 'close'}>
            <h2 style={{ position: 'relative', top: '50%' }}>New Here?</h2>
          </motion.div>
          <motion.button
            onClick={() => setIsLogin(false)}
            className="BtnField"
            variants={ButtonVariants}>
            SignUp
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
