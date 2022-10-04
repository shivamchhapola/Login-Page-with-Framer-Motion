import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginElements from './LoginElements';
import SignUpElements from './SignUpElements';
import './MobileLogin.css';

const LoginButtonVar = {
  open: {
    backgroundColor: '#E2E8F0',
    color: '#2D3748',
    transition: {
      duration: 0.2,
    },
  },
  close: {
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    borderRadius: '0 0 1rem 0',
    transition: {
      duration: 0.2,
    },
  },
};

const SignupButtonVar = {
  open: {
    backgroundColor: '#E2E8F0',
    color: '#2D3748',
    transition: {
      duration: 0.2,
    },
  },
  close: {
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    borderRadius: '0 0 0 1rem',
    transition: {
      duration: 0.2,
    },
  },
};

const ContVar = {
  init: {
    x: 600,
    display: 'none',
    transition: {
      duration: 0.3,
    },
  },
  anim: {
    x: 0,
    display: 'flex',
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
  close: {
    x: -600,
    transition: {
      duration: 0.3,
    },
  },
};

export default function MobileLogin() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <motion.div className="Mobile">
      <motion.div className="Selector">
        <motion.button
          initial={isLogin ? 'open' : 'close'}
          animate={isLogin ? 'open' : 'close'}
          variants={LoginButtonVar}
          className="SelectorButton"
          onClick={() => setIsLogin(true)}>
          Login
        </motion.button>
        <motion.button
          initial={!isLogin ? 'open' : 'close'}
          animate={!isLogin ? 'open' : 'close'}
          variants={SignupButtonVar}
          className="SelectorButton"
          onClick={() => setIsLogin(false)}>
          SignUp
        </motion.button>
      </motion.div>
      <AnimatePresence initial={false}>
        {isLogin && (
          <motion.div
            key="login"
            className="SelectedElements"
            initial="init"
            animate="anim"
            exit="close"
            variants={ContVar}>
            <LoginElements className="MobileElements" />
            <motion.button
              className="MBtnField"
              onClick={() => setIsLogin(true)}>
              Login
            </motion.button>
          </motion.div>
        )}
        {!isLogin && (
          <motion.div
            key="signup"
            className="SelectedElements"
            initial="init"
            animate="anim"
            exit="close"
            variants={ContVar}>
            <SignUpElements className="MobileElements" />
            <motion.button
              className="MBtnField"
              onClick={() => setIsLogin(false)}>
              SignUp
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
