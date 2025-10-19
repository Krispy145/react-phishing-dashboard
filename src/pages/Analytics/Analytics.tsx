import { DashboardLayout } from '../../components/DashboardLayout';
import { useTheme } from '../../theme/ThemeProvider';
import { AnalyticsContainer } from './Analytics.styles';

export default function Analytics() {
  const { theme } = useTheme();

  // Sample analytics data
  const metrics = [
    { title: 'Total Threats Detected', value: '2,847', change: '+12.5%', positive: true },
    { title: 'False Positives', value: '23', change: '-8.2%', positive: true },
    { title: 'Detection Accuracy', value: '98.7%', change: '+2.1%', positive: true },
    { title: 'Response Time', value: '1.2s', change: '-15.3%', positive: true },
    { title: 'Active Monitors', value: '156', change: '+5.1%', positive: true },
    { title: 'System Uptime', value: '99.9%', change: '+0.1%', positive: true },
  ];

  const threatTypes = [
    { name: 'Phishing Emails', count: 1247, percentage: 43.8, severity: 'high' },
    { name: 'Malicious URLs', count: 892, percentage: 31.3, severity: 'high' },
    { name: 'Suspicious Domains', count: 456, percentage: 16.0, severity: 'medium' },
    { name: 'Social Engineering', count: 252, percentage: 8.9, severity: 'medium' },
  ];

  return (
    <DashboardLayout title="Analytics" data-route="analytics" selectedItem="analytics">
      <AnalyticsContainer theme={theme}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1
            style={{
              color: theme.colors.text.primary,
              fontSize: '2rem',
              fontWeight: '700',
              margin: '0 0 0.5rem 0',
            }}
          >
            Security Analytics
          </h1>
          <p
            style={{
              color: theme.colors.text.secondary,
              fontSize: '1.125rem',
              margin: '0',
            }}
          >
            Comprehensive threat detection and security metrics
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              style={{
                background: `linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.background} 100%)`,
                borderRadius: '0.75rem',
                padding: '1.5rem',
                border: `1px solid ${theme.colors.border}`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = theme.shadows.lg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '3px',
                  background: `linear-gradient(90deg, ${theme.colors.primary[500]}, ${theme.colors.primary[300]})`,
                }}
              />
              <h3
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: theme.colors.text.secondary,
                  margin: '0 0 0.75rem 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {metric.title}
              </h3>
              <div
                style={{
                  fontSize: '2.25rem',
                  fontWeight: '700',
                  color: theme.colors.text.primary,
                  margin: '0 0 0.5rem 0',
                  lineHeight: '1',
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: metric.positive ? '#10b981' : '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <span>{metric.positive ? '↗' : '↘'}</span>
                {metric.change}
              </div>
            </div>
          ))}
        </div>

        {/* Threat Distribution Chart */}
        <div
          style={{
            background: theme.colors.surface,
            borderRadius: '1rem',
            padding: '1.5rem',
            border: `1px solid ${theme.colors.border}`,
            boxShadow: theme.shadows.sm,
            marginBottom: '2rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: theme.colors.text.primary,
              margin: '0 0 0.25rem 0',
            }}
          >
            Threat Distribution
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: theme.colors.text.secondary,
              margin: '0 0 2rem 0',
            }}
          >
            Real-time threat analysis and trends
          </p>

          <div
            style={{
              background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.gray[50]} 100%)`,
              border: `2px dashed ${theme.colors.border}`,
              borderRadius: '0.75rem',
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '2rem',
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📊</div>
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: theme.colors.text.primary,
              }}
            >
              Interactive Threat Analytics
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                color: theme.colors.text.secondary,
                marginBottom: '2rem',
                textAlign: 'center',
              }}
            >
              Advanced threat visualization and trend analysis coming soon
            </div>

            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
            >
              {threatTypes.map((threat, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor:
                        threat.severity === 'high'
                          ? '#ef4444'
                          : threat.severity === 'medium'
                            ? '#f59e0b'
                            : '#10b981',
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', color: theme.colors.text.secondary }}>
                    {threat.name}: {threat.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Threat Categories Table */}
        <div
          style={{
            background: theme.colors.surface,
            borderRadius: '1rem',
            padding: '1.5rem',
            border: `1px solid ${theme.colors.border}`,
            boxShadow: theme.shadows.sm,
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: theme.colors.text.primary,
              margin: '0 0 0.25rem 0',
            }}
          >
            Top Threat Categories
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: theme.colors.text.secondary,
              margin: '0 0 1.5rem 0',
            }}
          >
            Most detected threat types this month
          </p>

          <div style={{ width: '100%' }}>
            <div
              style={{
                background: theme.colors.gray[50],
                borderRadius: '0.5rem',
                marginBottom: '0.5rem',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                gap: '1rem',
                padding: '1rem',
              }}
            >
              <div style={{ fontWeight: '600', color: theme.colors.text.primary }}>Threat Type</div>
              <div style={{ fontWeight: '600', color: theme.colors.text.primary }}>Count</div>
              <div style={{ fontWeight: '600', color: theme.colors.text.primary }}>Severity</div>
              <div style={{ fontWeight: '600', color: theme.colors.text.primary }}>Trend</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {threatTypes.map((threat, index) => (
                <div
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = theme.colors.gray[50];
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '500', color: theme.colors.text.primary }}>
                      {threat.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: theme.colors.text.secondary }}>
                      {threat.percentage}% of total
                    </div>
                  </div>
                  <div style={{ fontWeight: '600', color: theme.colors.text.primary }}>
                    {threat.count.toLocaleString()}
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        backgroundColor:
                          threat.severity === 'high'
                            ? '#fef2f2'
                            : threat.severity === 'medium'
                              ? '#fffbeb'
                              : '#f0fdf4',
                        color:
                          threat.severity === 'high'
                            ? '#dc2626'
                            : threat.severity === 'medium'
                              ? '#d97706'
                              : '#059669',
                        border: `1px solid ${
                          threat.severity === 'high'
                            ? '#fecaca'
                            : threat.severity === 'medium'
                              ? '#fed7aa'
                              : '#bbf7d0'
                        }`,
                      }}
                    >
                      {threat.severity.toUpperCase()}
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: '#10b981',
                    }}
                  >
                    <span>↗</span>
                    <span style={{ fontSize: '0.75rem', textTransform: 'capitalize' }}>
                      increasing
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnalyticsContainer>
    </DashboardLayout>
  );
}
