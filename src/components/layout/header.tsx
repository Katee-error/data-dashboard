'use client'
import { AppBar, Avatar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { ThemeSwitcher } from "../theme-swither";
interface HeaderProps {
  open: boolean
  onToggle: () => void
}

export const Header = ({ open, onToggle }: HeaderProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Кнопка бургер-меню */}
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          edge="start"
          onClick={onToggle}
          sx={{ mr: 2 }}
        >
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>

        {/* Заголовок */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>

        <Box>
          <ThemeSwitcher />
        </Box>

        {/* Меню пользователя */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={(e) => e.preventDefault()} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}


