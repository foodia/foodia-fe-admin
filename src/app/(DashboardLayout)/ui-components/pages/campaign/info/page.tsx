"use client";
import { Approvals } from "@/app/(DashboardLayout)/components/api/Approvals";
import {
  getCampaignDetail,
  postCampaignPayment,
} from "@/app/(DashboardLayout)/components/api/Campaign";
import { getWalletList } from "@/app/(DashboardLayout)/components/api/Wallet";
import Detonator from "@/app/(DashboardLayout)/components/campaign/Detonator";
import Donators from "@/app/(DashboardLayout)/components/campaign/Donators";
import Info from "@/app/(DashboardLayout)/components/campaign/Info";
import Maps from "@/app/(DashboardLayout)/components/campaign/Maps";
import Orders from "@/app/(DashboardLayout)/components/campaign/Orders";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import DataTables, {
  DataTablesManualPagination,
} from "@/app/(DashboardLayout)/components/shared/DataTables";
import {
  ModalPopupAddDonations,
  ModalPopupApprovals,
} from "@/app/(DashboardLayout)/components/shared/ModalPopup";
import {
  Box,
  Button,
  Grid,
  Input,
  InputAdornment,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { IconBan, IconCircleCheck, IconCirclePlus } from "@tabler/icons-react";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: number;
  event_name: string;
  event_date: string;
  event_type: string;
  event_time: string;
  description: string;
  note: string;
  donation_target: any;
  donation_collected: any;
  status: string;
  order_status: string;
  image_url: string;
  food_required: number;
  food_total: number;
  latitude: any;
  longitude: any;
  address: string;
  sub_district: string;
  city: string;
  province: string;
  postal_code: string;
  detonator: {
    id: number;
    status: string;
    self_photo: string;
    oauth: { fullname: string; email: string; phone: string };
  };
  orders: [
    {
      id: number;
      order_status: string;
      qty: string;
      merchant: { oauth: { fullname: string } };
      merchant_product: {
        id: number;
        name: string;
        price: string;
        images: [{ image_url: string }];
      };
    }
  ];
  campaign_donation: {
    id: number;
    transaction: {
      sender_name: string;
      amount: number;
      transaction_type: string;
      transaction_date: string;
      transaction_status: string;
    };
  }[];
};

const CampaignInfo = () => {
  const searchParams = useSearchParams();
  const { isLoading, setIsLoading } = useAppContext();
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAddDonation, setIsOpenAddDonation] = useState(false);
  const [ids, setId] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [valueWalletType, setValueWalletType] = useState("default");
  const [selectedWallet, setSelectedWallet] = useState("default");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState<Props>({
    id: 0,
    event_name: "",
    event_date: "",
    event_type: "",
    event_time: "",
    description: "",
    note: "",
    donation_target: "",
    donation_collected: "",
    status: "",
    order_status: "",
    image_url: "",
    food_required: 0,
    food_total: 0,
    latitude: "",
    longitude: "",
    address: "",
    sub_district: "",
    city: "",
    province: "",
    postal_code: "",
    detonator: {
      id: 0,
      status: "",
      self_photo: "",
      oauth: { fullname: "", email: "", phone: "" },
    },
    orders: [
      {
        id: 0,
        order_status: "",
        qty: "",
        merchant: { oauth: { fullname: "" } },
        merchant_product: {
          id: 0,
          name: "",
          price: "",
          images: [{ image_url: "" }],
        },
      },
    ],
    campaign_donation: [
      {
        id: 0,
        transaction: {
          sender_name: "",
          amount: 0,
          transaction_type: "",
          transaction_date: "",
          transaction_status: "",
        },
      },
    ],
  });
  const [walletList, setWalletList] = useState([]);
  const [fieldsCsrWalletSelection, setFields] = useState([""]); // Initial state with one empty field

  console.log(valueWalletType);

  const onChangeWalletType = (event: SelectChangeEvent) => {
    setValueWalletType(event.target.value);
    setSelectedWallet("default");
    getWalletList(setWalletList, event.target.value, setIsLoading);
  };

  const onChangeAddDonationAmount = (event: any) => {
    let inputVal = event.target.value;
    inputVal = inputVal.replace(/\D/g, ""); // Remove all non-numeric characters
    inputVal = inputVal.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Add dots every 3 digits
    setAmount(inputVal);
  };

  const onChangeSelectedWallet = (event: SelectChangeEvent) => {
    setSelectedWallet(event.target.value);
  };

  const handleOpenAddDonation = () => {
    setIsOpenAddDonation(true);
  };

  const handleCloseAddDonation = () => {
    setIsOpenAddDonation(false);
  };

  const handleAddDonation = (id: any, selectedWallet: any, amount: any) => {
    const addAmount = parseInt(amount.replace(/\./g, ""), 10);
    const onSuccess = () => {
      handleCloseAddDonation();
      location.reload();
    };
    postCampaignPayment(id, selectedWallet, addAmount, onSuccess());
  };

  const handleOpen = (id: number, status: string, name: string) => {
    setIsOpen(true);
    setName(name);
    setId(id);
    setStatus(status);
  };

  const handleClose = () => {
    setIsOpen(false);
    // setValueEventTypeSelect("default");
  };

  useEffect(() => {
    getCampaignDetail(searchParams.get("id"), setData, setIsLoading);
  }, []);

  const breadcrumbs = [
    <Button
      key={0}
      sx={{
        p: 0,
        fontSize: "13px",
        color: "#000",
        fontWeight: 400,
        ":hover": { color: "blue" },
      }}
      href="/ui-components/pages/campaign"
    >
      Campaign List
    </Button>,
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Campaign Detail
    </Typography>,
  ];

  const columns = [
    {
      name: "No",
      selector: (_row: any, i: any) => i + 1,
      width: "70px",
      // style: {
      //   paddingLeft: "30px",
      // },
    },
    {
      name: "Nama Donator",
      cell: (row: any) => (
        <>
          <Typography sx={{ fontSize: "13px" }}>{row.name}</Typography>
        </>
      ),
      // sortable: true,
    },
    {
      name: "Deposit",
      cell: (row: any) => (
        <>
          <Typography sx={{ fontSize: "13px" }}>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(row.balance)}
          </Typography>
        </>
      ),
      // sortable: true,
    },
    {
      name: "Last Transaction",
      cell: (row: any) => (
        <>
          <Typography sx={{ fontSize: "13px" }}>
            {moment(row.updated).format("DD/MM/YYYY")}
          </Typography>
        </>
      ),
      // sortable: true,
    },
    {
      name: "Jumlah Donasi",
      cell: (row: any) => (
        <>
          <TextField
            variant="standard"
            size="small"
            value={amount}
            type="text"
            onChange={onChangeAddDonationAmount}
            sx={{
              border: "1px solid lightgray",
              padding: "5px",
              textAlign: "center",
              // ".MuiInput-input": {
              //   paddingLeft: "20px",
              //   // background: "rgba(63, 182, 72, 0.10)",
              //   borderRadius: "12px",
              //   width: "100%",
              // },
            }}
            // label="Search By"
            InputProps={{
              disableUnderline: true,
              // startAdornment: (
              //   <InputAdornment position="start">Rp.</InputAdornment>
              // ),
            }}
          />
        </>
      ),
      // sortable: true,
    },
  ];

  return (
    <>
      <DashboardCard title="Campaign Detail" breadcrumb={breadcrumbs}>
        <>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={6}>
              <Info data={data} />
              <Donators data={data.campaign_donation} />
            </Grid>
            <Grid item xs={6} lg={6}>
              <Orders data={data} />
              <Detonator data={data} />
              <Maps data={data} />
              {/* <Attachment data={data} /> */}
            </Grid>
          </Grid>
          <Box
            paddingBottom="70px"
            paddingTop="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Stack spacing={1} direction="row">
              <Button
                variant="contained"
                size="large"
                color="success"
                disabled={
                  data.donation_collected >= data.donation_target ||
                  data.status !== "approved"
                }
                onClick={() => handleOpenAddDonation()}
              >
                <IconCirclePlus size={18} /> Add Donation
              </Button>
              <Button
                variant="contained"
                size="large"
                color="success"
                disabled={data.status === "approved"}
                onClick={() => handleOpen(data.id, "approved", data.event_name)}
              >
                <IconCircleCheck size={18} /> Approve
              </Button>
              <Button
                variant="contained"
                size="large"
                color="error"
                disabled={data.status === "rejected"}
                onClick={() => handleOpen(data.id, "rejected", data.event_name)}
              >
                <IconBan size={16} /> Reject
              </Button>
            </Stack>
          </Box>
        </>
      </DashboardCard>

      <ModalPopupAddDonations
        open={isOpenAddDonation}
        handleClose={handleCloseAddDonation}
        campaign_name={data.event_name}
        required_donation={data.donation_target}
        collected_donation={data.donation_collected}
        valueWalletType={valueWalletType}
        onChangeWalletType={onChangeWalletType}
        walletList={walletList}
        selectedWallet={selectedWallet}
        onChangeSelectedWallet={onChangeSelectedWallet}
        onChangeAddDonationAmount={onChangeAddDonationAmount}
        valueDonationAmount={amount}
        handleAddDonation={() =>
          handleAddDonation(data.id, selectedWallet, amount)
        }
        fieldsCsrWalletSelection={fieldsCsrWalletSelection}
      >
        <DataTablesManualPagination
          // value={filterText}
          // searchOption={searchOption}
          // valueSearchBy={searchBy}
          // onChangeFilterText={handleChangeFilterText}
          // onKeyUpSearch={handleKeyUp}
          // filterText={filterOptions}
          // onChange={handleChangePage}
          // download={false}
          // search={false}
          // onChangeSearch={handleChangeSearch}
          // onChangeSearchBy={handleChangeSearchBy}
          // pageItems={data.length}
          // meta={meta}
          columns={columns}
          data={walletList}
          pagination={true}
        />
      </ModalPopupAddDonations>

      <ModalPopupApprovals
        isLoading={isLoadingModal}
        open={isOpen}
        handleClose={handleClose}
        status={status}
        name={name}
        note={note}
        onChange={(e: any) => setNote(e.target.value)}
        handleSubmit={() => {
          setIsLoadingModal(true);
          Approvals(
            ids,
            status,
            note,
            setIsOpen,
            "campaign",
            setIsLoadingModal
            // valueEventTypeSelect
          );
        }}
        // valueEventTypeSelect={valueEventTypeSelect}
        // onChangeEventType={onChangeValueEventTypeSelect}
        // disableApprove={valueEventTypeSelect === "default"}
      />
    </>
  );
};

export default CampaignInfo;
