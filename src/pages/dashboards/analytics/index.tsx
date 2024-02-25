// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import AnalyticsTable from 'src/views/dashboards/analytics/AnalyticsTable'
import AnalyticsTrophy from 'src/views/dashboards/analytics/AnalyticsTrophy'
import AnalyticsSessions from 'src/views/dashboards/analytics/AnalyticsSessions'
import AnalyticsTotalProfit from 'src/views/dashboards/analytics/AnalyticsTotalProfit'
import AnalyticsPerformance from 'src/views/dashboards/analytics/AnalyticsPerformance'
import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsWeeklyOverview from 'src/views/dashboards/analytics/AnalyticsWeeklyOverview'
import AnalyticsDepositWithdraw from 'src/views/dashboards/analytics/AnalyticsDepositWithdraw'
import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsTransactionsCard from 'src/views/dashboards/analytics/AnalyticsTransactionsCard'
import CrmMeetingSchedule from 'src/views/dashboards/analytics/CrmMeetingSchedule'

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <AnalyticsTrophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsTransactionsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmMeetingSchedule />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsWeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='22:00'
                icon={<Icon icon='mdi:poll' />}
                color='secondary'
                trendNumber='3 mins'
                title='Last Call'
                subtitle='Nike'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='25.02'
                trend='negative'
                trendNumber='4 hours'
                title='Maintenance'
                subtitle='Adidas'
                icon={<Icon icon='mdi:briefcase-variant-outline' />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='10'
                trend='negative'
                trendNumber=''
                title='Active Installs'
                subtitle='latest is Adidas'
                icon={<Icon icon='mdi:briefcase-variant-outline' />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='4'
                trend='negative'
                trendNumber=''
                title="Week's Visits"
                subtitle='latest is Nike'
                icon={<Icon icon='mdi:briefcase-variant-outline' />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AnalyticsTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
