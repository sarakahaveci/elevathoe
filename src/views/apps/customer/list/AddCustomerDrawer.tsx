import React from "react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Icon from "src/@core/components/icon";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootState, AppDispatch } from "src/store";

import { useAuth } from "src/hooks/useAuth";

interface SidebarAddCustomerProps {
  open: boolean;
  toggle: () => void;
  updateCustomerList: (newCustomer: Customer) => void;
}

const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} field is required`;
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`;
  } else {
    return "";
  }
};

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 4),
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
}));

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, (obj) => showErrors("First Name", obj.value.length, obj.min))
    .required(),
});

interface Customer {
  name: string;
}
const defaultValues = {
  name: "",
};

const SidebarAddCustomer = (props: SidebarAddCustomerProps) => {
  const { open, toggle, updateCustomerList } = props;
  const [newCustomer, setNewCustomer] = useState<Customer | null>(null);
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const auth = useAuth();
  
  const onSubmit = (data: { name: string }) => {
    const { name } = data;
    if (open) {
      const newCustomerData: Customer = {
        name: name
      };
      auth.addcustomer({ name: name, cancel: 0, update: 0 }, () => {
        props.updateCustomerList(newCustomerData);
        console.log("New customer added:", newCustomerData);
        reset();
      });
    
      auth.getcustomer({ name }, (response) => {
        console.log(response, 'testingData');
        if (response.error) {
          setError("name", {
            type: "manual",
            message: "Error: Unable to retrieve customer data",
          });
        } else {
          console.log("Received customer data:", response.data);
          }
      });
    };
    
  }
    
  const handleClose = () => {
    toggle();
    reset();
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      variant="temporary"
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ "& .MuiDrawer-paper": { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant="h6">Add Customer</Typography>
        <IconButton
          size="small"
          onClick={handleClose}
          sx={{ color: "text.primary" }}
        >
          <Icon icon="mdi:close" fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label="Name"
                  onChange={onChange}
                  error={Boolean(errors.name)}
                />
              )}
            />
            {errors.name && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.name.message}
              </FormHelperText>
            )}
          </FormControl>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              size="large"
              type="submit"
              variant="contained"
              sx={{ mr: 3 }}
            >
              Submit
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  );
};

export default SidebarAddCustomer;
