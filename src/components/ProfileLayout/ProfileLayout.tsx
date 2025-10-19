import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { useTheme } from '../../theme/ThemeProvider';
import { Scaffold } from '../Scaffold';
import {
  ProfileAvatar,
  ProfileContent,
  ProfileEmail,
  ProfileHeader,
  ProfileInfo,
  ProfileName,
} from './ProfileLayout.styles';

export interface ProfileLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  children,
  title = 'Profile',
  showBackButton = true,
  onBack,
}) => {
  const { theme } = useTheme();
  const { logout } = useAuthStore();

  const drawerItems = [
    {
      key: 'profile',
      label: 'Profile',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      path: '/profile',
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      path: '/settings',
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16,17 21,12 16,7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      ),
      onClick: logout,
    },
  ];

  const drawerHeader = (
    <ProfileHeader theme={theme}>
      <ProfileAvatar theme={theme}>JD</ProfileAvatar>
      <ProfileInfo theme={theme}>
        <ProfileName theme={theme}>John Doe</ProfileName>
        <ProfileEmail theme={theme}>john.doe@example.com</ProfileEmail>
      </ProfileInfo>
    </ProfileHeader>
  );

  const drawerFooter = (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <small style={{ color: theme.colors.text.secondary }}>Profile Layout Example</small>
    </div>
  );

  return (
    <Scaffold
      title={title}
      showBackButton={showBackButton}
      onBack={onBack}
      drawer={{
        items: drawerItems,
        header: drawerHeader,
        footer: drawerFooter,
      }}
      bodyPadding={false}
    >
      <ProfileContent theme={theme}>{children}</ProfileContent>
    </Scaffold>
  );
};
