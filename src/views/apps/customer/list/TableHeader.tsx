import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { GetCustomerParams } from 'src/context/types'
import { useForm } from 'react-hook-form'
import { useAuth } from 'src/hooks/useAuth'
import Icon from 'src/@core/components/icon'
import { useState } from 'react';

interface TableHeaderProps extends Props {
  value: string;
  toggle: () => void;
  handleFilter: (val: string) => void;
}
interface FormData {
  name: string;
}
interface Props {
  open: boolean;
  toggle: () => void;
  clients: GetCustomerParams[] | undefined; // Add the clients prop here
  setClients: (val: GetCustomerParams[]) => void; // Add the setClients prop here
  setSelectedClient: (val: GetCustomerParams) => void; // Add the setSelectedClient prop here
}
const TableHeader = (props: TableHeaderProps) => {
  const GetCustomer = ({
    open,
    setSelectedClient,
    clients,
    setClients,
  }: Props) => {
    const {
      reset,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<FormData>({
      defaultValues: { name: '' },
    });

    const auth = useAuth();

    const onSubmit = (data: FormData) => {
      const { name } = data;
      const getCustomer: GetCustomerParams = { name, update: 0, cancel: 0 };
      
      if (open) {
        auth.getcustomer(getCustomer, () => {
          console.log('123');
        });
      }
      
      if (clients !== undefined) {
        setClients([...clients, getCustomer]);
      }
      
      setSelectedClient(getCustomer);
      toggle();
      reset({ name: '' });
    };

    const handleDrawerClose = () => {
      toggle();
      reset({ name: '' });
    };

    const { handleFilter, value, toggle } = props;

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

          <Button onClick={handleSubmit(onSubmit)} sx={{ mb: 2 }} variant='contained'>
            + Add
          </Button>
        </Box>
      </Box>
    );
  };

  return <GetCustomer {...props} />;
};

export default TableHeader;
