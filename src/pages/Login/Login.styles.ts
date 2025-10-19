import styled from 'styled-components';
import { Button } from '../../components/Button';

export const LoginCard = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.shadows.md};
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto; /* Center horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Perfect center */
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary[600]};
  margin: 0 0 0.5rem 0;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0;
`;

export const ThemeToggleContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LoginButton = styled(Button)`
  margin-top: 0.5rem;
`;

export const ErrorMessage = styled.div`
  background-color: ${(props) => props.theme.colors.primary[50]};
  border: 1px solid ${(props) => props.theme.colors.primary[200]};
  color: ${(props) => props.theme.colors.primary[700]};
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  text-align: center;
`;
