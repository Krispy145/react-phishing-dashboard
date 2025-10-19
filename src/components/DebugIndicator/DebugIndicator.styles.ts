import styled from 'styled-components';

export const DebugContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  z-index: 1000;
  pointer-events: none;
`;

export const DebugBadge = styled.div<{ $variant?: 'default' | 'admin' }>`
  background-color: ${
    (props) => (props.$variant === 'admin' ? props.theme.colors.primary[600] : '#ef4444') // red-500
  };
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  box-shadow: ${(props) => props.theme.shadows.sm};
  border: 1px solid
    ${
      (props) => (props.$variant === 'admin' ? props.theme.colors.primary[700] : '#dc2626') // red-600
    };
  white-space: nowrap;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.shadows.md};
  }
`;
