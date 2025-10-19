import styled from 'styled-components';

export const SampleContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SampleCard = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.shadows.md};
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const SampleTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 1rem 0;
`;

export const SampleDescription = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

export const SampleList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const SampleItem = styled.div<{ $risk: 'low' | 'medium' | 'high' }>`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.lg};
    border-color: ${(props) => {
      switch (props.$risk) {
        case 'high':
          return '#ef4444';
        case 'medium':
          return '#f59e0b';
        case 'low':
          return '#10b981';
        default:
          return props.theme.colors.border;
      }
    }};
  }

  border-left: 4px solid ${(props) => {
    switch (props.$risk) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return props.theme.colors.border;
    }
  }};
`;

export const SampleItemTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
`;

export const SampleItemDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0;
  line-height: 1.5;
`;
