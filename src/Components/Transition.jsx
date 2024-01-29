import React, { useContext, useRef } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

import TransitionContext from '../context/TransitionContext';

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);
 
  return (
    <SwitchTransition>
      <Transition
      
        key={location.pathname}
        timeout={500}
        onEnter={(node) => {
          toggleCompleted(false);
          gsap.set(node, { autoAlpha: 0, scale: 1, xPercent: -50 });
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(node, { autoAlpha: 1, xPercent: 0, duration: 1.2 })
            .to(node, { scale: 1, duration: 0.8 })
            .play();
        }}
        onExit={(node) => {
          gsap
            .timeline({ 
              paused: true,
              onComplete: () => gsap.set(node, { clearProps: 'all' }) // Reset all GSAP properties
            })
            .to(node, { scale: 1, duration: 0.8 })
            .to(node, { autoAlpha: 0, duration: 0.4 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
