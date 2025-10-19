import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 0.75rem;
  margin-bottom: 2rem;
  box-shadow: ${(props) => props.theme.shadows.sm};
`;

export const Avatar = styled.div`
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
  margin-bottom: 0.75rem;
`;

export const UserName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 0.25rem 0;
`;

export const UserEmail = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0;
`;

export const SidebarContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;
