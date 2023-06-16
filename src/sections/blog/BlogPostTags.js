import PropTypes from 'prop-types';
import { Checkbox, Stack, FormControlLabel } from '@mui/material';
import { fShortenNumber } from '../../utils/formatNumber';
import Iconify from '../../components/iconify';

BlogPostTags.propTypes = {
  post: PropTypes.object,
};

export default function BlogPostTags({ post }) {
  const { favorite } = post;

  return (
    <Stack direction="row" alignItems="center">
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            size="small"
            color="error"
            icon={<Iconify icon="eva:heart-fill" />}
            checkedIcon={<Iconify icon="eva:heart-fill" />}
          />
        }
        label={fShortenNumber(favorite)}
      />
    </Stack>
  );
}
