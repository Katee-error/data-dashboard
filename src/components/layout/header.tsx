"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Avatar, Tooltip } from "@mui/material";
import { ThemeSwitcher } from "../theme-swither";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
const [isMounted, setIsMounted] = useState(false)
  const router = useRouter();


  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Заголовок */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         home
        </Typography>
        <Box>
          <ThemeSwitcher />
        </Box>

        {/* Меню пользователя */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={(e) => e.preventDefault} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
