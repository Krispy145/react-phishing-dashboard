import { Button } from '../../components/Button';
import { DashboardLayout } from '../../components/DashboardLayout';
import { useTheme } from '../../theme/ThemeProvider';
import {
  ActionButtons,
  FieldLabel,
  FieldValue,
  ProfileCard,
  ProfileContainer,
  ProfileDescription,
  ProfileField,
  ProfileSection,
  ProfileTitle,
  SectionTitle,
} from './Profile.styles';

export default function Profile() {
  const { theme } = useTheme();

  return (
    <DashboardLayout title="Profile" data-route="profile" selectedItem="profile">
      <ProfileContainer theme={theme}>
        <ProfileCard theme={theme}>
          <ProfileTitle theme={theme}>User Profile</ProfileTitle>
          <ProfileDescription theme={theme}>
            Manage your account information and preferences.
          </ProfileDescription>

          <ProfileSection theme={theme}>
            <SectionTitle theme={theme}>Personal Information</SectionTitle>
            <ProfileField theme={theme}>
              <FieldLabel theme={theme}>Full Name</FieldLabel>
              <FieldValue theme={theme}>John Doe</FieldValue>
            </ProfileField>
            <ProfileField theme={theme}>
              <FieldLabel theme={theme}>Email</FieldLabel>
              <FieldValue theme={theme}>john.doe@example.com</FieldValue>
            </ProfileField>
            <ProfileField theme={theme}>
              <FieldLabel theme={theme}>Phone</FieldLabel>
              <FieldValue theme={theme}>+1 (555) 123-4567</FieldValue>
            </ProfileField>
            <ProfileField theme={theme}>
              <FieldLabel theme={theme}>Location</FieldLabel>
              <FieldValue theme={theme}>San Francisco, CA</FieldValue>
            </ProfileField>
          </ProfileSection>

          <ProfileSection theme={theme}>
            <SectionTitle theme={theme}>Account Settings</SectionTitle>
            <ProfileField theme={theme}>
              <FieldLabel theme={theme}>Two-Factor Authentication</FieldLabel>
              <FieldValue theme={theme}>Enabled</FieldValue>
            </ProfileField>
            <ProfileField theme={theme}>
              <FieldLabel theme={theme}>Email Notifications</FieldLabel>
              <FieldValue theme={theme}>Enabled</FieldValue>
            </ProfileField>
            <ProfileField theme={theme}>
              <FieldLabel theme={theme}>Dark Mode</FieldLabel>
              <FieldValue theme={theme}>Auto</FieldValue>
            </ProfileField>
          </ProfileSection>

          <ProfileSection theme={theme}>
            <SectionTitle theme={theme}>Actions</SectionTitle>
            <ActionButtons>
              <Button variant="primary">Edit Profile</Button>
              <Button variant="outline">Change Password</Button>
              <Button variant="outline">Export Data</Button>
            </ActionButtons>
          </ProfileSection>
        </ProfileCard>
      </ProfileContainer>
    </DashboardLayout>
  );
}
