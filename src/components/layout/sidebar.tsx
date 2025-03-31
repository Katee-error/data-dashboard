
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Link from "next/link";

const drawerWidth = 240;

interface SidebarProps {
  open: boolean
}

export const Sidebar = ({ open }: SidebarProps) => {

  const navItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Analytics", icon: <AssessmentIcon />, path: "/dashboard" },
    { text: "Profile", icon: <AccountCircleIcon />, path: "/dashboard" },
    { text: "Settings", icon: <SettingsIcon />, path: "/dashboard" },

  ];

  return (
    <div style={{ display: "flex", }}>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          style: {
            width: open ? drawerWidth : 60,
            overflowX: "hidden",
            transition: "width 0.3s",
            whiteSpace: "nowrap",
          },
        }}
      >
        <List>
          {navItems.map(({ text, icon, path }) => (
            <ListItem
              key={text}
              component={Link}
              href={path}
              style={{ justifyContent: open ? "initial" : "center" }}
              sx={{
                paddingLeft: open ? 2 : 1,
                paddingRight: open ? 2 : 1,
              }}
            >
              <Tooltip title={!open ? text : ""} placement="right">
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : "auto" }}>
                  {icon}
                </ListItemIcon>
              </Tooltip>
              {open && <ListItemText primary={text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
