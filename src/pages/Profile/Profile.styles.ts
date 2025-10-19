import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProfileCard = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.shadows.md};
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 2rem;
`;

export const ProfileTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 1rem 0;
`;

export const ProfileDescription = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

export const ProfileSection = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const ProfileField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[100]};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const FieldLabel = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 0.875rem;
`;

export const FieldValue = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 0.875rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
