// @mui
import { Stack, Button, Typography, Box } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import { textGradient } from '../../../utils/cssStyles';

// ----------------------------------------------------------------------

export default function NavHelp() {
  const theme = useTheme();

  return (
    <Stack
      spacing={3}
      sx={{
        px: 5,
        pb: 5,
        mt: 10,
        width: 1,
        display: 'block',
        textAlign: 'center',
      }}
    >
      <Box component="img" src="/assets/illustrations/illustration_empty_mail.svg" />

      <div>
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            ...textGradient(
              `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
            ),
          }}
        >
          "Hello, friends."
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
          Need any help? please contact with email?
        </Typography>
      </div>
      <Button href="/contact-us" target="_blank" rel="noopener" variant="contained">
        Send Email
      </Button>
    </Stack>
  );
}
