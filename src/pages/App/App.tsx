import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { getProtectedRoutes } from '../../routes/routes';
import { useTheme } from '../../theme/ThemeProvider';
import {
  AppContainer,
  ButtonGroup,
  FeatureDescription,
  FeatureItem,
  FeatureList,
  FeatureTitle,
  WelcomeCard,
  WelcomeSubtitle,
  WelcomeTitle,
} from './App.styles';

export default function App() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const protectedRoutes = getProtectedRoutes();

  return (
    <AppContainer theme={theme} data-route="home">
      <WelcomeCard theme={theme}>
        <WelcomeTitle theme={theme}>PhishGuard</WelcomeTitle>
        <WelcomeSubtitle theme={theme}>
          Advanced phishing detection and prevention platform. Protect your organization with
          AI-powered threat analysis.
        </WelcomeSubtitle>

        <ButtonGroup>
          <Button variant="primary" size="lg" onClick={() => navigate('/login')}>
            Get Started
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')}>
            View Dashboard
          </Button>
        </ButtonGroup>

        <FeatureList theme={theme}>
          <FeatureItem theme={theme}>
            <FeatureTitle theme={theme}>AI Detection</FeatureTitle>
            <FeatureDescription theme={theme}>
              Machine learning algorithms analyze URLs and content for phishing patterns
            </FeatureDescription>
          </FeatureItem>

          <FeatureItem theme={theme}>
            <FeatureTitle theme={theme}>Real-time Monitoring</FeatureTitle>
            <FeatureDescription theme={theme}>
              Continuous monitoring of email traffic and web activity
            </FeatureDescription>
          </FeatureItem>

          <FeatureItem theme={theme}>
            <FeatureTitle theme={theme}>Threat Intelligence</FeatureTitle>
            <FeatureDescription theme={theme}>
              Up-to-date threat feeds and security intelligence
            </FeatureDescription>
          </FeatureItem>

          <FeatureItem theme={theme}>
            <FeatureTitle theme={theme}>Analytics Dashboard</FeatureTitle>
            <FeatureDescription theme={theme}>
              Comprehensive reporting and analytics for security teams
            </FeatureDescription>
          </FeatureItem>

          <FeatureItem theme={theme}>
            <FeatureTitle theme={theme}>Route Protection System</FeatureTitle>
            <FeatureDescription theme={theme}>
              Centralized route configuration with automatic authentication guards
            </FeatureDescription>
            <div
              style={{
                marginTop: '1rem',
                fontSize: '0.875rem',
                color: theme.colors.text.secondary,
              }}
            >
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Protected Routes ({protectedRoutes.length}):</strong>
              </div>
              {protectedRoutes.map((route) => (
                <div key={route.path} style={{ marginLeft: '1rem', marginBottom: '0.25rem' }}>
                  • {route.path} - {route.title}
                </div>
              ))}
            </div>
          </FeatureItem>
        </FeatureList>
      </WelcomeCard>
    </AppContainer>
  );
}
