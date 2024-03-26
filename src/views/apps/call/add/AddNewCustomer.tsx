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
import { AddCustomerParams } from 'src/context/types';

interface FormData {
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
});

interface Props {
  open: boolean;
  toggle: () => void;
  clients: AddCustomerParams[] | undefined;
  setClients: (val: AddCustomerParams[]) => void;
  setSelectedClient: (val: AddCustomerParams) => void;
}

const AddNewCustomer = ({
  open,
  toggle,
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
    resolver: yupResolver(schema),
    defaultValues: { name: '' },
  });

  const auth = useAuth();

  const onSubmit = (data: FormData) => {
    const { name } = data;
    const newCustomer: AddCustomerParams = { name, update: 0, cancel: 0 };
    if (open) {
      auth.addcustomer(newCustomer, () => {
        console.log('123');
      });
    }
    if (clients !== undefined) {
      setClients([...clients, newCustomer]);
    }
    setSelectedClient(newCustomer);
    toggle();
    reset({ name: '' });
  };

  const handleDrawerClose = () => {
    toggle();
    reset({ name: '' });
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
