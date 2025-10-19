import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Scaffold } from '../../components/Scaffold';
import { useTheme } from '../../theme/ThemeProvider';

export default function ScaffoldExample() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const bottomNavItems = [
    {
      key: 'home',
      label: 'Home',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
      path: '/',
    },
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
    },
  ];

  const drawerItems = [
    {
      key: 'home',
      label: 'Home',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
      path: '/',
    },
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
        </svg>
      ),
      path: '/dashboard',
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
      onClick: () => navigate('/login'),
    },
  ];

  return (
    <Scaffold
      title="Scaffold Example"
      showBackButton={true}
      onBack={() => navigate(-1)}
      appBarActions={
        <Button variant="ghost" size="sm">
          Action
        </Button>
      }
      bottomNavigation={bottomNavItems}
      floatingActionButton={{
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        ),
        onClick: () => alert('FAB clicked!'),
        position: 'bottom-right',
      }}
      drawer={{
        items: drawerItems,
        header: (
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h3>Menu</h3>
          </div>
        ),
        footer: (
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            <small>Version 1.0.0</small>
          </div>
        ),
      }}
    >
      <div style={{ padding: '2rem', color: theme.colors.text.primary }}>
        <h1>Scaffold Example</h1>
        <p>This demonstrates the Flutter-style Scaffold component with:</p>
        <ul>
          <li>✅ App Bar with back button and actions</li>
          <li>✅ Drawer navigation (click the menu icon)</li>
          <li>✅ Bottom navigation</li>
          <li>✅ Floating Action Button</li>
          <li>✅ Theme support</li>
        </ul>

        <div style={{ marginTop: '2rem' }}>
          <Button variant="primary" onClick={() => navigate('/dashboard')}>
            Go to Dashboard
          </Button>
        </div>
      </div>
    </Scaffold>
  );
}
