import styled from 'styled-components';

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.surface};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const ProfileAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary[500]},
    ${(props) => props.theme.colors.primary[700]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const ProfileName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 0.25rem 0;
`;

export const ProfileEmail = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0;
`;

export const ProfileActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ProfileContent = styled.div`
  padding: 1.5rem;
`;

export const ProfileSection = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 1rem 0;
`;

export const ProfileField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const FieldLabel = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const FieldValue = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
`;
