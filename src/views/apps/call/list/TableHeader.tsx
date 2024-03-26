// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import { GridRowId } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { useAuth } from '../../../../hooks/useAuth';
import { useState, useEffect } from 'react';

interface TableHeaderProps {
  value: string
  selectedRows: GridRowId[]
  handleFilter: (val: string) => void
}

interface User {
  name: string;
  update: number;
  cancel: number;
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { value, selectedRows, handleFilter } = props
  const auth = useAuth();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await auth.getcustomer({ name: '', update: 0, cancel: 0 });
        if (userData !== undefined) {
          setUsers(userData);
        } else {
          console.error('No data returned from auth.getcustomer()');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchData(); 
  }, []);

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder='Search'
          onChange={e => handleFilter(e.target.value)}
        />
      </Box>

      {/* Display fetched users in the table */}
      <Box>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}

export default TableHeader;
