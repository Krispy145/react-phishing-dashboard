import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useAuthStore } from '../../store/authStore';
import { useTheme } from '../../theme/ThemeProvider';
import { Button } from '../Button';
import { Scaffold } from '../Scaffold';
import { Avatar, SidebarFooter, UserEmail, UserName, UserProfile } from './DashboardLayout.styles';

export interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  selectedItem?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title = 'Dashboard',
  showBackButton = false,
  onBack,
  isCollapsed: externalIsCollapsed,
  onToggleCollapse,
  selectedItem,
}) => {
  const { theme } = useTheme();
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const breakpoint = useBreakpoint();
  const [internalIsCollapsed, setInternalIsCollapsed] = useState(false);

  // Use external state if provided, otherwise use internal state
  const isCollapsed = externalIsCollapsed !== undefined ? externalIsCollapsed : internalIsCollapsed;
  const toggleCollapse = onToggleCollapse || (() => setInternalIsCollapsed((prev) => !prev));

  // Only show max/min functionality on desktop
  const isDesktop = breakpoint === 'desktop';

  const drawerItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      path: '/dashboard',
      active: selectedItem === 'dashboard',
    },
    {
      key: 'samples',
      label: 'Samples',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
      path: '/sample-scaffold',
      active: selectedItem === 'samples',
    },
    {
      key: 'analytics',
      label: 'Analytics',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      ),
      path: '/analytics',
      active: selectedItem === 'analytics',
    },
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
      active: selectedItem === 'profile',
    },
  ];

  // Collapsed header (icon only)
  const collapsedHeader = (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0.5rem' }}>
      <Avatar theme={theme} style={{ width: '2rem', height: '2rem', fontSize: '0.875rem' }}>
        JD
      </Avatar>
    </div>
  );

  // Expanded header (full UI)
  const expandedHeader = (
    <UserProfile theme={theme}>
      <Avatar theme={theme}>JD</Avatar>
      <UserName theme={theme}>John Doe</UserName>
      <UserEmail theme={theme}>john.doe@example.com</UserEmail>
    </UserProfile>
  );

  // Collapsed footer (icon only + toggle on desktop only)
  const collapsedFooter = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem 0.5rem',
        gap: '0.5rem',
      }}
    >
      <button
        onClick={logout}
        style={{
          background: 'none',
          border: 'none',
          color: theme.colors.text.primary,
          cursor: 'pointer',
          padding: '0.5rem',
          borderRadius: '0.375rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.gray[100];
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        title="Logout"
      >
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
      </button>
      {isDesktop && (
        <button
          onClick={toggleCollapse}
          style={{
            background: 'none',
            border: 'none',
            color: theme.colors.text.primary,
            cursor: 'pointer',
            padding: '0.25rem',
            borderRadius: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.gray[100];
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          title="Expand sidebar"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );

  // Expanded footer (full UI + toggle on desktop only)
  const expandedFooter = (
    <div>
      <SidebarFooter theme={theme}>
        <Button variant="outline" fullWidth onClick={logout}>
          Logout
        </Button>
      </SidebarFooter>
      {isDesktop && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button
            onClick={toggleCollapse}
            style={{
              background: 'none',
              border: 'none',
              color: theme.colors.text.primary,
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.gray[100];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            title="Collapse sidebar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <Scaffold
      title={title}
      showBackButton={showBackButton}
      onBack={onBack}
      collapsedSidebarWidth="3rem"
      disableToggleButtons={isDesktop}
      isSidebarCollapsed={isCollapsed}
      onSidebarToggle={toggleCollapse}
      drawer={{
        items: drawerItems,
        header: isCollapsed ? collapsedHeader : expandedHeader,
        footer: isCollapsed ? collapsedFooter : expandedFooter,
      }}
      bodyPadding={true}
    >
      {children}
    </Scaffold>
  );
};
