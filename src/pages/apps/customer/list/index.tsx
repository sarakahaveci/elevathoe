// ** React Imports
import { useState, useEffect, MouseEvent, useCallback } from "react";
import { useAuth } from "src/hooks/useAuth";

// ** Next Imports
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CardContent from "@mui/material/CardContent";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// ** Icon Imports
import Icon from "src/@core/components/icon";

// ** Store Imports
import { useDispatch, useSelector } from "react-redux";

// ** Custom Components Imports
import CustomChip from "src/@core/components/mui/chip";
import CustomAvatar from "src/@core/components/mui/avatar";
import CardStatisticsHorizontal from "src/@core/components/card-statistics/card-stats-horizontal";

// ** Utils Import
import { getInitials } from "src/@core/utils/get-initials";

// ** Actions Imports
import { fetchData, deleteCustomer } from "src/store/apps/customer";

// ** Third Party Components
import axios from "axios";

// ** Types Imports
import { RootState, AppDispatch } from "src/store";
import { CardStatsType } from "src/@fake-db/types";
import { ThemeColor } from "src/@core/layouts/types";
import { CustomerTypes } from "src/types/apps/customerTypes";
import { CardStatsHorizontalProps } from "src/@core/components/card-statistics/types";

// ** Custom Table Components Imports
import TableHeader from "src/views/apps/customer/list/TableHeader";
import AddCustomerDrawer from "src/views/apps/customer/list/AddCustomerDrawer";
import { CustomerResponse } from "src/context/types";

// ** Vars
interface CellType {
  row: ReturnCustomer;
}

interface ReturnCustomer {
  entryId: string;
  name: string;
  orgId: number;
  id: number;
}

interface CustomerData {
  entryId: string;
  name: string;
  orgId: number;
  id: number;
}

const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  textDecoration: "none",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const RowOptions = ({ id }: { id: number | string }) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const rowOptionsOpen = Boolean(anchorEl);

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRowOptionsClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deleteCustomer(id));
    handleRowOptionsClose();
  };

  return (
    <>
      <IconButton size="small" onClick={handleRowOptionsClick}>
        <Icon icon="mdi:dots-vertical" />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ style: { minWidth: "8rem" } }}
      >
        <MenuItem
          component={Link}
          sx={{ "& svg": { mr: 2 } }}
          onClick={handleRowOptionsClose}
          href="/apps/customer/view/overview/"
        >
          <Icon icon="mdi:eye-outline" fontSize={20} />
          View
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ "& svg": { mr: 2 } }}>
          <Icon icon="mdi:pencil-outline" fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ "& svg": { mr: 2 } }}>
          <Icon icon="mdi:delete-outline" fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

const columns: GridColDef[] = [
  {
    flex: 0.2,
    minWidth: 230,
    field: "name",
    headerName: "Name",
    renderCell: ({ row }: CellType) => {
      const { name } = row;

      return (
        <Box sx={{ display: "flex", alignItems: "center" }} id={row.entryId}>
          <Box
            sx={{
              color: "#000",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            {name}
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0,
    minWidth: 90,
    sortable: false,
    field: "actions",
    headerName: "Actions",
    renderCell: ({ row }: CellType) => <RowOptions id={row.entryId} />,
  },
];

const CustomerList = ({
  apiData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ** State
  const [role, setRole] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [addCustomerOpen, setAddCustomerOpen] = useState<boolean>(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const [allData, setAllData] = useState<CustomerData[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.customer);
  const auth = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await auth.getcustomer({
          start: 0,
          finish: 100, 
        });
        console.log('API RESPONSE', res.data);
        const fetchedData = transformData(res.data.data.customers);
        setAllData(fetchedData); 
        setTotalPages(Math.ceil(res.data.data.totalCount / paginationModel.pageSize));
      } catch (error) {
        console.error("Error fetching customers:", error);
        setAllData([]); 
      }
    };
    fetchData();
  }, [auth]); 

  const transformData = (customers: any[]): CustomerData[] => {
    return customers.map((customer) => ({
      id: customer.entryId,
      entryId: customer.entryId,
      name: customer.name,
      orgId: customer.orgId,
    }));
  };

  const handleFilter = useCallback(
    async (val: string) => {
      setValue(val);
      const searchResult: any = await auth.getcustomer({
        start: (paginationModel.page) * paginationModel.pageSize,
        finish: (paginationModel.page + 1) * paginationModel.pageSize,
        text: val,
      });
      setAllData(transformData(searchResult.data.data.customers));
    },
    [value, paginationModel.page, paginationModel.pageSize]
  );

  const toggleAddCustomerDrawer = () => setAddCustomerOpen(!addCustomerOpen);

  const handlePageChange = (model: any) => {
    setPaginationModel(model);
  };

  const dataSliceStart = paginationModel.page * paginationModel.pageSize;
  const dataSliceEnd = dataSliceStart + paginationModel.pageSize;
  const slicedData = allData.slice(dataSliceStart, dataSliceEnd);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          {/* FOR DISPLAYING */}
          <TableHeader
            value={value}
            handleFilter={handleFilter}
            toggle={toggleAddCustomerDrawer}
          />
          <DataGrid
            autoHeight
            rows={slicedData}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={handlePageChange}
            rowCount={allData.length} 
            pagination 
            paginationMode="server"
          />
        </Card>
      </Grid>
      {/* For adding new customers */}
      <AddCustomerDrawer
        open={addCustomerOpen}
        toggle={toggleAddCustomerDrawer}
      />
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("/cards/statistics");
  const apiData: CardStatsType = res.data;

  return {
    props: {
      apiData,
    },
  };
};

export default CustomerList;
