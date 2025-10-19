import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Scaffold } from '../../components/Scaffold';
import { ThemeToggle } from '../../components/ThemeToggle';
import { DEBUG_CONFIG, isFeatureEnabled } from '../../config/debug';
import { useAuthStore } from '../../store/authStore';
import { useTheme } from '../../theme/ThemeProvider';
import {
  ErrorMessage,
  Form,
  FormGroup,
  LoginButton,
  LoginCard,
  LoginHeader,
  Logo,
  Subtitle,
  ThemeToggleContainer,
} from './Login.styles';

export default function Login() {
  const { theme } = useTheme();
  const { login, adminOverride } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login({ email, password });
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdminOverride = () => {
    adminOverride();
    navigate('/dashboard');
  };

  return (
    <Scaffold title="Login" showBackButton={true} data-route="login">
      <ThemeToggleContainer>
        <ThemeToggle />
      </ThemeToggleContainer>

      <LoginCard theme={theme}>
        <LoginHeader>
          <Logo theme={theme}>PhishGuard</Logo>
          <Subtitle theme={theme}>Sign in to your account</Subtitle>
        </LoginHeader>

        <Form onSubmit={handleSubmit}>
          {error && <ErrorMessage theme={theme}>{error}</ErrorMessage>}

          <FormGroup>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              fullWidth
            />
          </FormGroup>

          <FormGroup>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              fullWidth
            />
          </FormGroup>

          <LoginButton type="submit" variant="primary" size="lg" fullWidth loading={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </LoginButton>

          {/* Admin Override Button - Only in Debug Mode */}
          {isFeatureEnabled('ADMIN_OVERRIDE') && (
            <LoginButton
              type="button"
              variant={DEBUG_CONFIG.ADMIN.OVERRIDE_BUTTON_VARIANT}
              size={DEBUG_CONFIG.ADMIN.OVERRIDE_BUTTON_SIZE}
              fullWidth
              onClick={handleAdminOverride}
              style={{ marginTop: '1rem' }}
            >
              {DEBUG_CONFIG.ADMIN.OVERRIDE_BUTTON_TEXT}
            </LoginButton>
          )}
        </Form>
      </LoginCard>
    </Scaffold>
  );
}
