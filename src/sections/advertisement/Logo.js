import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      component="img"
      src="https://logodix.com/logo/2042932.png"
      sx={{
        width: 200,
        height: 100,
        display: 'inline-flex',
        cursor: 'pointer',
        ...sx,
      }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link
      component={NextLink}
      href="https://hostinger.in?REFERRALCODE=1SATYENDRAS51"
      sx={{ display: 'contents' }}
    >
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
