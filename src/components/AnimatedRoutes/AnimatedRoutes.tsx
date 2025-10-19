import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled components
const RouteContainer = styled.div<{ 
  $animationType: 'fade' | 'slide' | 'scale';
  $isAnimating: boolean;
}>`
  width: 100%;
  height: 100%;
  animation: ${props => {
    if (!props.$isAnimating) return 'none';
    
    switch (props.$animationType) {
      case 'slide':
        return `${slideInFromRight} 0.3s ease-out forwards`;
      case 'scale':
        return `${scaleIn} 0.4s ease-out forwards`;
      case 'fade':
      default:
        return `${fadeIn} 0.3s ease-out forwards`;
    }
  }};
`;

export interface AnimatedRoutesProps {
  children: React.ReactNode;
  animationType?: 'fade' | 'slide' | 'scale';
}

export const AnimatedRoutes: React.FC<AnimatedRoutesProps> = ({
  children,
  animationType = 'fade',
}) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <RouteContainer $animationType={animationType} $isAnimating={isAnimating}>
      {children}
    </RouteContainer>
  );
};
