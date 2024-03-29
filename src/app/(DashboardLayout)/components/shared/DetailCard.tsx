import { Box, Typography } from "@mui/material";

interface ChildProps {
  children: React.ReactNode;
  title: any;
  subTitle?: any;
}

const DetailCard: React.FC<ChildProps> = ({ children, title, subTitle }) => {
  return (
    <>
      {/* <BaseCard title="Detonator Info" status={data.status}> */}
      <Box sx={{ paddingLeft: "45px", paddingY: "20px" }}>
        <Typography sx={{ color: "#000", fontSize: "18px", fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "#333", fontSize: "13px", fontWeight: 400 }}>
          {subTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
          // paddingLeft: "45px",
          // paddingY: "20px",
          backgroundColor: "#FFF",
          borderRadius: "14px",
          boxShadow: "0px 0px 12px 0px rgba(0, 38, 96, 0.08)",
          // borderTop: "1px solid #EBEBEB",
          // borderBottom: "1px solid #EBEBEB",
        }}
      >
        {children}
      </Box>
      {/* </BaseCard> */}
    </>
  );
};

export default DetailCard;
