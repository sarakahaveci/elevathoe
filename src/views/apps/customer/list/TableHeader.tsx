// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useAuth } from 'src/hooks/useAuth'
// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { RootState, AppDispatch } from 'src/store'
// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, toggle, value } = props

  interface SidebarAddCustomerType {
    open: boolean
    toggle: () => void
  }
  
  interface CustomerData {
    name: string
  }
  
  const defaultValues = {
    name: ''
  }
  interface FormData {
name:string
   }
   
    // ** Hooks
    const dispatch = useDispatch<AppDispatch>()
    const store = useSelector((state: RootState) => state.customer)
    const {
      reset,
      control,
      setValue,
      setError,
      handleSubmit,
      formState: { errors }
    } = useForm({
      defaultValues,
      mode: 'onChange',
    })
    // const onSubmit = (data: CustomerData) => {
    //   dispatch(addCustomer({ ...data }))
    //   toggle()
    //   reset()
    // }
  
    const auth = useAuth();
    const onSubmit = (data: FormData) => {
      const { name } = data
      auth.getcustomer({ name}, () => {
        setError('name', {
          type: 'manual',
          message: 'Email or Password is invalid'
        })
      })
    }
   
    const handleClose = () => {
      toggle()
      reset()
    }


  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button
        sx={{ mr: 4, mb: 2 }}
        color='secondary'
        variant='outlined'
        startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
      >
        Export
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder='Search Customer'
          onChange={e => handleFilter(e.target.value)}
        />
 <form onSubmit={handleSubmit(onSubmit)}>
        
        <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
          + Add
        </Button>
        </form>
      </Box>
    </Box>
  )
}

export default TableHeader
