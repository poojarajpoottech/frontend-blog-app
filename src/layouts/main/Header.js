import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useContext } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, IconButton } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';

// components
import Logo from '../../components/logo';
import { useSettingsContext } from '../../components/settings';
import SvgColor from '../../components/svg-color';

//
import NavMobile from './nav/mobile';
import navConfig from './nav/config-navigation';
import NavDesktop from './nav/desktop';

import { UserContext } from '../../pages/_app';

// ----------------------------------------------------------------------

export default function Header() {
  const { state } = useContext(UserContext);

  const theme = useTheme();
  const { themeMode, onToggleMode } = useSettingsContext();

  const isDesktop = useResponsive('up', 'md');

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <NavMobile isOffset={isOffset} data={navConfig} />
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

          <IconButton color={themeMode === 'dark' ? 'warning' : 'default'} onClick={onToggleMode}>
            <SvgColor
              src={`/assets/icons/setting/ic_${themeMode === 'light' ? 'moon' : 'sun'}.svg`}
            />
          </IconButton>

          {state ? (
            <Button
              component={NextLink}
              sx={{ ml: 2 }}
              variant="contained"
              rel="noopener"
              href="/auth/logout-user"
            >
              Logout
            </Button>
          ) : (
            <Button
              component={NextLink}
              sx={{ ml: 2 }}
              variant="contained"
              rel="noopener"
              href="/auth/login-unprotected"
            >
              Login
            </Button>
          )}
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
