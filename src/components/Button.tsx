import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeProvider';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
}

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $loading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${(props) => (props.$loading ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$loading ? 0.7 : 1)};
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};

  /* Size variants */
  ${(props) => {
    switch (props.$size) {
      case 'sm':
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          height: 2rem;
        `;
      case 'lg':
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1.125rem;
          height: 3rem;
        `;
      default: // md
        return `
          padding: 0.625rem 1.25rem;
          font-size: 1rem;
          height: 2.5rem;
        `;
    }
  }}

  /* Color variants */
  ${(props) => {
    const { theme } = props;
    switch (props.$variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary[600]};
          color: white;
          border: 1px solid ${theme.colors.primary[600]};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary[700]};
            border-color: ${theme.colors.primary[700]};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.primary[800]};
            border-color: ${theme.colors.primary[800]};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.gray[100]};
          color: ${theme.colors.gray[900]};
          border: 1px solid ${theme.colors.gray[300]};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[200]};
            border-color: ${theme.colors.gray[400]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary[600]};
          border: 1px solid ${theme.colors.primary[600]};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary[50]};
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${theme.colors.gray[600]};
          border: 1px solid transparent;
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[100]};
            color: ${theme.colors.gray[900]};
          }
        `;
    }
  }}
  
  &:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.02);
    box-shadow: ${(props) => props.theme.shadows.lg};
  }

  &:active:not(:disabled) {
    transform: translateY(0) scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  children,
  disabled,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      disabled={disabled || loading}
      theme={theme}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </StyledButton>
  );
};
