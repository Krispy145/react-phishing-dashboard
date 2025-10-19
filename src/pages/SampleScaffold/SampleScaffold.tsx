import { DashboardLayout } from '../../components/DashboardLayout';
import { useTheme } from '../../theme/ThemeProvider';
import {
  SampleCard,
  SampleContainer,
  SampleDescription,
  SampleItem,
  SampleItemDescription,
  SampleItemTitle,
  SampleList,
  SampleTitle,
} from './SampleScaffold.styles';

export default function SampleScaffold() {
  const { theme } = useTheme();

  const sampleData = [
    {
      id: '1',
      title: 'Phishing Email Sample',
      description: 'Suspicious email with suspicious links and urgent language',
      type: 'email',
      risk: 'high' as const,
    },
    {
      id: '2',
      title: 'Legitimate Website',
      description: 'Verified safe website with proper SSL certificate',
      type: 'website',
      risk: 'low' as const,
    },
    {
      id: '3',
      title: 'Suspicious URL',
      description: 'URL with typosquatting and suspicious domain',
      type: 'url',
      risk: 'medium' as const,
    },
    {
      id: '4',
      title: 'Banking Phish',
      description: 'Fake banking website attempting to steal credentials',
      type: 'website',
      risk: 'high' as const,
    },
  ];

  return (
    <DashboardLayout title="Sample Scaffold" data-route="sample-scaffold" selectedItem="samples">
      <SampleContainer theme={theme}>
        <SampleCard theme={theme}>
          <SampleTitle theme={theme}>Sample Data Management</SampleTitle>
          <SampleDescription theme={theme}>
            Manage and review phishing detection samples with our advanced interface.
          </SampleDescription>

          <SampleList theme={theme}>
            {sampleData.map((sample) => (
              <SampleItem key={sample.id} theme={theme} $risk={sample.risk}>
                <SampleItemTitle theme={theme}>{sample.title}</SampleItemTitle>
                <SampleItemDescription theme={theme}>{sample.description}</SampleItemDescription>
                <div
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.75rem',
                    color: theme.colors.text.muted,
                  }}
                >
                  Type: {sample.type} • Risk: {sample.risk}
                </div>
              </SampleItem>
            ))}
          </SampleList>
        </SampleCard>
      </SampleContainer>
    </DashboardLayout>
  );
}
