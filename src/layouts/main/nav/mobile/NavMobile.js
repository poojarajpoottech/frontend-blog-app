import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { List, Drawer, IconButton, Typography } from '@mui/material';
// config
import { NAV } from '../../../../config-global';
// components
import Iconify from '../../../../components/iconify';
import Scrollbar from '../../../../components/scrollbar';
//
import NavList from './NavList';
import NavHelp from '../NavHelp';
import { fDate } from '../../../../utils/formatTime';

// ----------------------------------------------------------------------

NavMobile.propTypes = {
  data: PropTypes.array,
  isOffset: PropTypes.bool,
};

export default function NavMobile({ isOffset, data }) {
  const { pathname } = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          ml: 1,
          color: 'text.secondary',
          ...(isOffset && {
            color: 'text.primary',
          }),
        }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_BASE,
          },
        }}
      >
        <Scrollbar>
          <Typography variant="subtitle2" sx={{ mx: 2.5, my: 3, textAlign: 'center' }}>
            Last Update - {fDate(Date())}
          </Typography>
          <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}
          </List>
          <NavHelp />
        </Scrollbar>
      </Drawer>
    </>
  );
}
