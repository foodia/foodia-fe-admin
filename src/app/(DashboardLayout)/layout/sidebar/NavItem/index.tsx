import React, { useEffect, useState } from "react";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
  Collapse,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import {
  IconChevronDown,
  IconChevronUp,
  IconCircle,
  IconUser,
} from "@tabler/icons-react";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";

type NavGroup = {
  [x: string]: any;
  id?: any;
  navlabel?: boolean;
  subheader?: string;
  // submenu?: [
  //   {
  //     id?: number;
  //     href?: any;
  //     name?: string;
  //   }
  // ];
  title?: string;
  icon?: any;
  href?: any;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
  index?: any;
}

const NavItem = ({ item, index, level, pathDirect, onClick }: ItemType) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;
  const [open, setOpen] = useState(true);
  const [Index, setIndex] = useState(
    parseInt(`${localStorage.getItem("Index")}`, 10)
  );

  // useEffect(() => {
  //   const storedValue = localStorage.getItem("Index");

  //   // If a value is found in localStorage, update the state
  //   if (storedValue) {
  //     setIndex(parseInt(storedValue, 10));
  //   }
  // }, []);

  console.log(Index);

  const handleClick = (index: any) => {
    setIndex(index);
    localStorage.setItem("Index", index);
  };

  const ListItemStyled = styled(ListItemButton)(() => ({
    display: "flex",
    flexDirection: "column",
    ".MuiButtonBase-root": {
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: "black",
      "&:hover": {
        backgroundColor: "black",
        color: "black",
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "black",
          color: "black",
        },
      },
    },
  }));

  return (
    <List component="div" disablePadding key={item.id}>
      {item.submenu ? (
        <>
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              width: "100%",
              color: "white",
              marginBottom: "5px",
            }}
            onClick={() => handleClick(index)}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%", // Added width to take up the full width
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "white",
                    minWidth: 0,
                  }}
                >
                  {itemIcon}
                </ListItemIcon>
                <ListItemText sx={{ marginLeft: "20px" }}>
                  {item.title}
                </ListItemText>
              </Box>
              {index === Index && open ? (
                <IconChevronUp />
              ) : (
                <IconChevronDown />
              )}
            </Box>
          </Button>

          {item.submenu.map((t: any) => (
            <Collapse
              key={index}
              in={index === Index && open ? true : false}
              timeout="auto"
            >
              <ListItemButton
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  marginLeft: "40px",
                  padding: "8px 10px",
                  borderRadius: "9px",
                  // color: theme.palette.text.secondary,
                  paddingLeft: "10px",
                  ":hover": {
                    color: "black",
                    backgroundColor: "#E9FBF0",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#E9FBF0",
                    color: "black",
                    ":hover": {
                      backgroundColor: "#E9FBF0",
                    },
                  },
                }}
                component={Link}
                key={t.id}
                href={t.href}
                selected={pathDirect === t.href}
                onClick={() => handleClick(index)}
              >
                {/* <ListItemIcon
                  sx={{
                    minWidth: "36px",
                    p: "3px 0",
                    color: "inherit",
                  }}
                  >
                  {t.icon}
                </ListItemIcon> */}
                <ListItemText primary={t.name} />
                {t.isUnapproved ? (
                  <ListItemText>
                    <IconCircle color="red" fill="red" size={10} />
                  </ListItemText>
                ) : (
                  ""
                )}
              </ListItemButton>
            </Collapse>
          ))}
        </>
      ) : (
        <ListItemStyled>
          <ListItemButton
            component={Link}
            href={item.href}
            disabled={item.disabled}
            selected={pathDirect === item.href}
            target={item.external ? "_blank" : ""}
            onClick={onClick}
          >
            <ListItemIcon
              sx={{
                minWidth: "36px",
                p: "3px 0",
                color: "inherit",
              }}
            >
              {itemIcon}
            </ListItemIcon>
            <ListItemText>
              <>{item.title}</>
            </ListItemText>
          </ListItemButton>
        </ListItemStyled>
      )}
    </List>
  );
};

export default NavItem;
