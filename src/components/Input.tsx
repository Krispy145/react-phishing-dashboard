import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeProvider';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const InputContainer = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const StyledInput = styled.input<{ $error?: boolean }>`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.$error ? props.theme.colors.primary[500] : props.theme.colors.border};
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  transition: all 0.2s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.gray[100]};
    color: ${props => props.theme.colors.text.muted};
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.primary[600]};
`;

const HelperText = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  id,
  ...props
}) => {
  const { theme } = useTheme();
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <InputContainer $fullWidth={fullWidth}>
      {label && <Label htmlFor={inputId} theme={theme}>{label}</Label>}
      <StyledInput
        id={inputId}
        $error={!!error}
        theme={theme}
        {...props}
      />
      {error && <ErrorText theme={theme}>{error}</ErrorText>}
      {helperText && !error && <HelperText theme={theme}>{helperText}</HelperText>}
    </InputContainer>
  );
};
