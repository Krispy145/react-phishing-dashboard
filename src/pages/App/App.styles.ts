import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary[50]},
    ${(props) => props.theme.colors.primary[100]}
  );
  padding: 2rem;
`;

export const WelcomeCard = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.shadows.lg};
  padding: 3rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

export const WelcomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary[600]};
  margin: 0 0 1rem 0;
`;

export const WelcomeSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const FeatureItem = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0;
  line-height: 1.5;
`;
