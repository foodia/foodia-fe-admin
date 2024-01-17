import React, { useEffect } from "react";
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
  id?: string;
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
}

const NavItem = ({ item, level, pathDirect, onClick }: ItemType) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const ListItemStyled = styled(ListItemButton)(() => ({
    display: "flex",
    flexDirection: "column",
    ".MuiButtonBase-root": {
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: theme.palette.text.secondary,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
    },
  }));

  return (
    <List component="div" disablePadding key={item.id}>
      {item.submenu ? (
        <>
          <List
            component="div"
            key={item.id}
            style={{
              padding: "8px 10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "center" ,
              // backgroundColor: "gray",
              marginBottom: "5px",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "36px",
                // p: "3px 0",
                color: "inherit",
              }}
            >
              {itemIcon}
            </ListItemIcon>
            <ListItemText>
              <>{item.title}</>
            </ListItemText>
            <Button onClick={handleClick}>
              {open ? <IconChevronUp /> : <IconChevronDown />}
            </Button>
          </List>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {/* <List sx={{ pt: 0 }}> */}
            {/* <ListSubMenuStyled> */}
            {/* <ListItemStyled> */}
            {item.submenu.map((t: any) => (
              <ListItemButton
                style={{
                  display: "flex",
                  marginBottom: "8px",
                  marginLeft: "40px",
                  padding: "8px 10px",
                  borderRadius: "9px",
                  color: theme.palette.text.secondary,
                  paddingLeft: "10px",
                }}
                component={Link}
                key={t.id}
                href={t.href}
                selected={pathDirect === t.href}
                onClick={onClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "36px",
                    p: "3px 0",
                    color: "inherit",
                  }}
                >
                  {t.icon}
                </ListItemIcon>
                <ListItemText primary={t.name} />
                {t.isUnapproved ? (
                  <ListItemText>
                    <IconCircle color="red" fill="red" size={10} />
                  </ListItemText>
                ) : (
                  ""
                )}
              </ListItemButton>
            ))}
            {/* </ListItemStyled> */}
            {/* </ListSubMenuStyled> */}
            {/* </List> */}
          </Collapse>
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
