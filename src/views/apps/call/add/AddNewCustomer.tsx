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
import { InvoiceClientType } from 'src/types/apps/invoiceTypes';

interface Props {
  open: boolean;
  toggle: () => void;
  clients: InvoiceClientType[] | undefined;
  setClients: (val: InvoiceClientType[]) => void;
  setSelectedClient: (val: InvoiceClientType) => void;
}

interface FormData {
  name: string;
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,
}));

const schema = yup.object().shape({
  name: yup.string().required(),
});

const AddNewCustomer = ({ open, toggle, setSelectedClient, clients, setClients }: Props) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '' },
  });

  const auth = useAuth();

  const onSubmit = (data: FormData) => {
    const { name } = data;
    if (open) {
      auth.addcustomer({ name: name }, () => {
        // setError('name', {
        //   type: 'manual',
        //   message: 'Your input is incorrect',
        // });

  console.log('tstignadd123')

      });
    } else {
      auth.getcustomer({ name: name }, () => {
        // setError('name', {
        //   type: 'manual',
        //   message: 'Your input is incorrect',
        // });
      });
    }

    console.log('tstignadd123')

    if (clients !== undefined) {
      setClients([...clients, data]);
    }
    setSelectedClient(data);
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
      <Header>
        <Typography variant='h6'>Add New Customer</Typography>
        <IconButton size='small' onClick={toggle} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box component='form' sx={{ p: 5 }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 6 }}>
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
            <FormHelperText sx={{ color: 'error.main' }} id='invoice-name-error'>
              {errors.name.message}
            </FormHelperText>
          )}
        </FormControl>
        <div>
          <Button size='large' type='submit' variant='contained' sx={{ mr: 4 }}>
            Add
          </Button>
          <Button size='large' variant='outlined' color='secondary' onClick={handleDrawerClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Drawer>
  );
};

export default AddNewCustomer;
