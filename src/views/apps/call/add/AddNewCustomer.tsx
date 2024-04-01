import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useAuth } from 'src/hooks/useAuth';
import Icon from 'src/@core/components/icon';
// import { InvoiceClientType } from 'src/types/apps/invoiceTypes';
import {AddCustomerParams} from 'src/context/types'
// import { InvoiceClientType } from 'src/types/apps/invoiceTypes';



const schema = yup.object().shape({
  name: yup.string().required(),
  update: yup.number().required(),
  cancel: yup.number().required(),
});

interface Props {
  open: boolean;
  toggle: () => void;
  clients: AddCustomerParams [] | undefined;
  setClients: (val: AddCustomerParams []) => void;
  setSelectedClient: (val: AddCustomerParams ) => void;
}

interface FormData {
  name: string;
  update: number;
  cancel: number;
}

const AddNewCustomer = ({ open, toggle, setSelectedClient, clients, setClients }: Props) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', update: 0, cancel: 0 },
  });

  const auth = useAuth();

  const update = 0; 
  const cancel = 0; 


  const onSubmit = (data: FormData) => {
    const { name, update, cancel } = data;
    if (open) {
      auth.addcustomer({ name, update, cancel }, () => {
        //('testing add 123');
      });
    }

    //('tstignadd123');

    if (clients !== undefined) {
      setClients([...clients, data]);
    }
    setSelectedClient(data);
    toggle();
    reset({ name: '', update: 0, cancel: 0 })
  };

  const handleDrawerClose = () => {
    toggle();
    reset({ name: '', update: 0, cancel: 0 })
  };

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleDrawerClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: [300, 400] } }}
    >
      <Box>
        <Typography variant='h6'>Add New Customer</Typography>
        <IconButton size='small' onClick={toggle}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Box>
      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                label='Name'
                value={value}
                variant='outlined'
                onChange={onChange}
                error={Boolean(errors.name)}
              />
            )}
          />
          {errors.name && (
            <FormHelperText error>{errors.name.message}</FormHelperText>
          )}
        </FormControl>
        <Button type='submit'>Submit</Button>
      </Box>
    </Drawer>
  );
};

export default AddNewCustomer;
