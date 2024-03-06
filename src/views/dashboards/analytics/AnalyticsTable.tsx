// ** React Import
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

interface CallTableBodyRowType {
  id: number
  project: string
  customer: string
  elevator: string
  maintainer: string
  hour: string
  date: string
  status: 'active' | 'pending' | 'inactive'
}

interface CellType {
  row: CallTableBodyRowType
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const myrows: CallTableBodyRowType[] = [
  {
    id: 1,
    status: 'inactive',
    project: 'Nike',
    customer: 'Cevahir AVM',
    elevator: '11-22-33',
    maintainer: 'Taygun Yildirim',
    date: '01.01.2024',
    hour: '23:59'
  },
  {
    id: 2,
    status: 'active',
    project: 'Adidas',
    customer: 'Cevahir AVM',
    elevator: '11-22-33',
    maintainer: 'Taygun Yildirim',
    date: '02.01.2024',
    hour: '23:59'
  },
  {
    id: 3,
    status: 'active',
    project: 'Adidas',
    customer: 'Cevahir AVM',
    elevator: '11-22-33',
    maintainer: 'Taygun Yildirim',
    date: '02.01.2024',
    hour: '23:59'
  },
  {
    id: 4,
    status: 'active',
    project: 'Adidas',
    customer: 'Cevahir AVM',
    elevator: '11-22-33',
    maintainer: 'Taygun Yildirim',
    date: '02.01.2024',
    hour: '23:59'
  },
]

const statusObj: StatusObj = {
  active: { color: 'success' },
  pending: { color: 'warning' },
  inactive: { color: 'secondary' }
}

const columns: GridColDef[] = [
  {
    flex: 0.25,
    field: 'project',
    minWidth: 200,
    headerName: 'Project',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                mb: -0.5,
                fontWeight: 600,
                lineHeight: 1.72,
                fontSize: '0.875rem',
                letterSpacing: '0.22px'
              }}
            >
              {row.customer}
            </Typography>
            <Typography variant='body2' sx={{ fontSize: '0.75rem', letterSpacing: '0.4px' }}>
              {row.project}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'maintainer',
    headerName: 'Maintainer',
    renderCell: ({ row }: CellType) => (
      <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
        {row.maintainer}
      </Typography>
    )
  },
  {
    flex: 0.2,
    minWidth: 140,
    field: 'elevator',
    headerName: 'Elevator',
    renderCell: ({ row }: CellType) => (
      <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
        {row.elevator}
      </Typography>    )
  },
  {
    flex: 0.2,
    minWidth: 140,
    field: 'date',
    headerName: 'Call',
    renderCell: ({ row }: CellType) => (
      <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
        {row.date + ' ' + row.hour}
      </Typography>    )
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => (
      <CustomChip
        skin='light'
        label={row.status}
        color={statusObj[row.status].color}
        sx={{
          height: 24,
          fontSize: '0.75rem',
          textTransform: 'capitalize',
          '& .MuiChip-label': { fontWeight: 600, lineHeight: 1.4 }
        }}
      />
    )
  }
]

const AnalyticsTable = () => {
  return (
    <Card>
      <DataGrid autoHeight hideFooter rows={myrows} columns={columns} disableRowSelectionOnClick pagination={undefined} />
    </Card>
  )
}

export default AnalyticsTable
